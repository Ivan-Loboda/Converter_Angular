import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Currency_Converter';

  response: any = {
    date: '',
    baseCurrencyLit: '',
    usd: {
      // currency: '',
      // saleRate: '',
      // purchaseRate: ''
    },
    eur: {
      // currency: '',
      // saleRate: '',
      // purchaseRate: ''
    },

  };

  constructor(private http: HttpClient) { }

  search() {
    // return this.http.get("https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2014").subscribe((data) => {this.response = data})
    this.http.get('assets/data.json').subscribe((data: any) => {
      return this.response = {
        date: data.date,
        baseCurrencyLit: data.baseCurrencyLit,
        usd: data.exchangeRate[15],
        eur: data.exchangeRate[17],
      }
    });

  }

  ngOnInit() {
    this.search();
  }
}
