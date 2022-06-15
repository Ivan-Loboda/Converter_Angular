import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  model:number = 228;

  hoyodel:number = 322;
  response:any;

  constructor(private http: HttpClient) { }

  search() {
      return this.http.get("https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2014").subscribe((data) => {this.response = data})
      // this.http.get("https://pro-test-rest-api.herokuapp.com/contacts/").subscribe((data) => this.response = data)
  }

  ngOnInit() {
    this.search();
    this.model = 228228
    this.hoyodel = 322322
  }

}
