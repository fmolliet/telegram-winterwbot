import { AxiosResponse } from "axios";
import { Command, CommandParams } from "../interfaces";
import api from "../services/api";


class Status implements Command {
    name= 'status';
    description = 'Realiza busca de status do servidor';;
    
    getCommandName(): string | void {
        throw new Error("Method not implemented.");
    }
    execute(param: CommandParams): void {
        throw new Error("Method not implemented.");
    }
    
}

export default async function status() : Promise<AxiosResponse>{
    try {
        return await api.get('/', { timeout: 30000 })
    } catch(error) {
        return error
    }
}