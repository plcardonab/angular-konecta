import { Component } from '@angular/core';
import { AgentRespository } from '../data-source/aget-data';

import { Agent, agents } from '../models/agents';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css'],
})
export class AgenttListComponent {

  constructor(private readonly agentsData: AgentRespository) {
    this.agentsData.getAgents2().subscribe((data) => {
       JSON.parse(data.payload.data.onCreateHackathonEvents.event).detail.events.forEach((el: any) => {
        const { detail: { eventBody } } = el;
        let agents: Agent[] = eventBody.service.users
        console.log(JSON.stringify(agents))
        this.agentes = agents
    });
    })
  }


  agentes: Agent[] = agents;

  share() {

    window.alert('The product has been shared!');
  }


}


