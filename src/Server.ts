import 'reflect-metadata';
import 'dotenv/config';
import Bot from './Bot';

Bot.start()

process.once('SIGINT', () => Bot.stop('SIGINT'))
process.once('SIGTERM', () => Bot.stop('SIGTERM'))