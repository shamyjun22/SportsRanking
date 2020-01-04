import { Component, OnInit } from '@angular/core';

export class Quote {
  quote: string;
  author: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {



  quotes: Quote[] = [
    {quote: '“Hard work beats talent when talent doesn’t work hard.”', author:'Tim Notke'},
    {quote: '“It’s hard to beat a person who never gives up.”', author:'Babe Ruth'},
    {quote: '“The harder the battle, the sweeter the victory.”', author:'Les Brown'},
    {quote: '“You have to expect things of yourself before you can do them.”', author:'Michael Jordan'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
