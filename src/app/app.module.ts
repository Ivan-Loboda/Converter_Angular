import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BuyComponent } from './components/buy/buy.component';
import { SaleComponent } from './components/sale/sale.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuyComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
