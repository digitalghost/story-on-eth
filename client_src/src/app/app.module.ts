import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LatestComponent } from './latest/latest.component';
import { HottestComponent } from './hottest/hottest.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestComponent,
    HottestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
