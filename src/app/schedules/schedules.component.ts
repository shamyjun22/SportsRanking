import { Game } from '../game';
import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { Quote } from '../schedquote';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  quotes = Quote;
  games = Game;
  constructor() {
   }


  ngOnInit() {
  }

}
