import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirlineDataComponent } from './airline-data/airline-data.component';
import { TableDataComponent } from './table-data/table-data.component';
import { CommodityComponent } from './commodity/commodity.component';
import { ShcDataComponent } from './shc-data/shc-data.component';


@NgModule({
  declarations: [
    AppComponent,
    AirlineDataComponent,
    TableDataComponent,
    CommodityComponent,
    ShcDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
