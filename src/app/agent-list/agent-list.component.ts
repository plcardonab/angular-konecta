import { Component } from '@angular/core';
import { AgentRespository } from '../data-source/aget-data';

import { agents } from '../models/agents';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css'],
})
export class AgenttListComponent {
  constructor(private readonly agentsData: AgentRespository) {}
  agents = agents;
  data : any=   this.agentsData.getAgents();
  
  share() {

    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
