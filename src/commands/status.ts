import { AxiosResponse } from "axios";
import api from "../services/api";

export default async function status() : Promise<AxiosResponse>{
    try {
        return await api.get('/', { timeout: 30000 })
    } catch(error) {
        return error
    }
}