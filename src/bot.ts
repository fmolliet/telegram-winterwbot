import { Context, Telegraf } from 'telegraf';
import { Container } from 'typedi';

import glob          from 'glob';
import { promisify } from 'util';

import { Logger } from './helper/Logger';
import TwitterService from './services/TwitterService';
import { Command } from './interfaces';
import Status from './commands/status';

const globPromise = promisify(glob);
class Bot {
    
    public bot: Telegraf;
    
    constructor(){
        this.bot = new Telegraf(process.env.BOT_TOKEN || '');
        this.registers();
        this.services();
        this.commands();
    }
    
    registers(){
        Container.set([
            { id: 'Status', value: new Status() },
        ]);
    }
    
    services(){
        const TwitterInstance = Container.get(TwitterService)
    }
    
    async commands(){
        
        const files = await globPromise('src/commands/*.ts');
            
        for await (const file of files) {

            try {
                const command : Command = Container.get(
                    file.replace('src/commands/','').replace('.ts','')
                );
                
                console.log(command)
                
                this.bot.command(command.name, command.execute)
            } catch ( err ){
                Logger.error(err.message)
            }

        }

    }
    
    public start(): void{
        this.bot.start( (context : Context) => context.reply('Hello World!'))

        this.bot.launch()
            .then(()=> Logger.info('Bot started.'))
            .catch(erro => console.log(erro));
    }
    
    public stop(signal: string): void {
        this.bot.stop(signal)
    }
}

export default new Bot();