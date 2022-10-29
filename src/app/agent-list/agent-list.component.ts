import { Component } from '@angular/core';
import { AgentRespository } from '../data-source/aget-data';

import { agents } from '../agents';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css'],
})
export class AgentListComponent {
  agents = agents;

  share() {
    window.alert('The agent has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
