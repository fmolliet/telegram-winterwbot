import 'dotenv/config';
import { Context } from 'telegraf';
import bot from './bot';
import { Logger } from './helper/Logger';

bot.start( (context : Context) => context.reply('Hello World!'))

bot.launch()
    .then(()=> Logger.info('Bot started.'))
    .catch(erro => console.log(erro));
