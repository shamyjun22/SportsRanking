import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  txtshow: string = 'show';
  txthide: string = 'hide';

  show: string = this.txtshow;

  toggle(): void {
    if(this.show === this.txtshow){
      this.show = this.txthide;
    }else {
      this.show = this.txtshow;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
