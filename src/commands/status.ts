import { Context } from "telegraf";
import { Service } from "typedi";
import { Logger } from "../helper/Logger";
import { Command, CommandParams } from "../interfaces";
@Service({ global: true })
export default class Status implements Command {
    name= 'status';
    description = 'Realiza busca de status do servidor';
    
    constructor(){
        
    }
    
    getCommandName(): string | void {
        throw new Error("Method not implemented.");
    }
    execute(param: Context): void {
        Logger.info('Chamando status')
    }
    
}