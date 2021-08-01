import { Telegraf } from 'telegraf';
import status from './commands/status';
import { Logger } from './helper/Logger';

const bot = new Telegraf(process.env.BOT_TOKEN || '');

bot.command('status', async (ctx) => {

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

export default bot;