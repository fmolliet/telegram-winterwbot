import 'dotenv/config';
import { Context } from 'telegraf';
import bot from './bot';

bot.start( (context : Context) => context.reply('Hello World!'))

bot.launch()
    .then(()=> console.log("Bot iniciado"))
    .catch(erro => console.log(erro));