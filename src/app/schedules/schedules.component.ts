import { Game } from '../game';
import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  games = Game;
  constructor() {
   }


  ngOnInit() {
  }

}
