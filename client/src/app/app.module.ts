import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {routing} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./login/login.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
