import { Teams } from './../teams';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})

export class TeamsComponent implements OnInit {
  team = Teams;
  constructor() { }

  ngOnInit() {
  }

}
