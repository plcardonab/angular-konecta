import { Injectable } from "@angular/core";
import axios, { AxiosResponse } from "axios";

@Injectable( { providedIn: 'root' } )
export class AgentRespository {

    constructor() { }
    // Endpoint para realizar la petición del último evento
    private API_REST_PUBLIC = "https://mqjl9s6vf4.execute-api.eu-west-1.amazonaws.com/prod/v1/hackday/public/event";

    public async getAgents(): Promise<void> {
        console.log("getAgents");   
        const response = await axios.get(this.API_REST_PUBLIC);
        console.log(JSON.stringify(response.data));
    }


}