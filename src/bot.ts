import { Telegraf } from 'telegraf';
import status from './commands/status';

const bot = new Telegraf(process.env.BOT_TOKEN || '');

bot.command('status', async (ctx) => {

    try {
        const response = await status()

        if (response.status == 200) {
            await ctx.reply(`Google service: ✅`)
        } else {
            await ctx.reply(`Google service: ❌`)
        }

    } catch(error) {
        console.error(error)
    }
});

export default bot;