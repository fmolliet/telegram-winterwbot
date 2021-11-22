import { Context } from "telegraf";

export interface CommandParams {
    context: Context
    args?: Array<string>
}