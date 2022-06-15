import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  model:number = 228;

  hoyodel:number = 322;
  response:any;

  constructor() { }


  ngOnInit() {
    this.model = 228228
    this.hoyodel = 322322
  }

}
