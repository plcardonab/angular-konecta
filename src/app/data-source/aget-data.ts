import { Injectable } from "@angular/core";
import axios, { AxiosResponse } from "axios";
import { Agent } from "../models/agents";
import { Observable } from "rxjs";
import { publishBehavior } from "rxjs-compat/operator/publishBehavior";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class AgentRespository {

    constructor(
        private http: HttpClient
    ) { }
    // Endpoint para realizar la petición del último evento
    private API_REST_PUBLIC = "https://mqjl9s6vf4.execute-api.eu-west-1.amazonaws.com/prod/v1/hackday/public/event";

    private config = {
        method: 'get',
        url: this.API_REST_PUBLIC,
        headers: {
            'Accept': 'application/json'
        }
    }


    // public async getAgents(): Promise<Agent[]> {

    //     const { data } = await axios(this.config);
    //     const { payload: { data: { onCreateHackathonEvents: { event } } } } = data;
    //     const { detail: { events } } = JSON.parse(event)

    //     return events.forEach((el: any) => {
    //         const { detail: { eventBody } } = el;
    //         let agents: Agent[] = eventBody.service.users
    //         console.log(JSON.stringify(agents))
    //         return agents;
    //     });

    // }

    public getAgents2(): Observable<any> { 
        return this.http.get(this.API_REST_PUBLIC)
    }


}