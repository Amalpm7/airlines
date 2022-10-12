import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AirlineComponent } from './airline/airline.component';
import { RouterModule, Routes } from '@angular/router';
import { PassengerComponent } from './passenger/passenger.component';

const airlines:Routes=[
  {
    path:"",component:AirlineComponent
  },
  {
    path:"View",component:PassengerComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AirlineComponent,
    PassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(airlines)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
