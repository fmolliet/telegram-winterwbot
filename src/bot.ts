import { Context, Telegraf } from 'telegraf';
import { Container } from 'typedi';
import status from './commands/status';
import { Logger } from './helper/Logger';
import TwitterService from './services/TwitterService';

class Bot {
    
    public bot: Telegraf;
    
    constructor(){
        this.bot = new Telegraf(process.env.BOT_TOKEN || '');
    }
    
    services(){
        const TwitterInstance = Container.get(TwitterService)
    }
    
    commands(){
        this.bot.command('status', async (ctx) => {

            try {
                const response = await status()
        
                if (response.status == 200) {
                    Logger.info("Recebido request de status.")
                    await ctx.reply(`Google service: ✅`)
                } else {
                    await ctx.reply(`Google service: ❌`)
                }
        
            } catch(error) {
                console.error(error)
            }
        });
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