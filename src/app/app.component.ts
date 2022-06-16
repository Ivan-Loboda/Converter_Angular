import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { raceWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'Currency_Converter';

  response: any = {
    date: null,
    baseCurrencyLit: null,
    usd: {},
    eur: {},
  };

  tradeForm: any = {
    tradeType: 'buy',
    currency: '',
    sumInput: ''
  };

  curentCurrency: string = '';

  tradeResult?: number;

  constructor(private http: HttpClient) { }

  search() {

    const currentDate = new Date().toLocaleDateString();

    // this.http.get(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${currentDate}`)
    //   .subscribe((data: any) => {
    //     return this.response = {
    //       date: data.date,
    //       baseCurrencyLit: data.baseCurrencyLit,
    //       usd: data.exchangeRate[15],
    //       eur: data.exchangeRate[17],
    //     }
    //   });


    this.http.get('assets/data.json').subscribe((data: any) => {
      return this.response = {
        date: data.date,
        baseCurrencyLit: data.baseCurrencyLit,
        usd: data.exchangeRate.find((item: any) => item.currency === 'USD'),
        eur: data.exchangeRate.find((item: any) => item.currency === 'EUR'),
      }
    });

  };

  exchange() {
    const purchaseRate = this.response[this.tradeForm.currency].purchaseRate;
    const saleRate = this.response[this.tradeForm.currency].saleRate;

    if (this.tradeForm.tradeType === 'buy') {
      this.tradeResult = (purchaseRate * this.tradeForm.sumInput)
    } else if (this.tradeForm.tradeType === 'sale') {
      this.tradeResult = (saleRate * this.tradeForm.sumInput)
    }

    this.curentCurrency = this.tradeForm.currency;
  };

  ngOnInit(): void {
    this.search();
  }
}
