import { CommandParams } from "./CommandParams";

export interface Command {
    
    name: string;
    aliases?: Array<string> 
    description: string;
    
    hasArgs?: boolean;
    ownerOnly?: boolean;
    privateOnly?: boolean;
    
    cooldown?: number
    hasAttachment ?: boolean
    
    getCommandName() : string|void;
    
    execute( param: CommandParams ): void
    
}