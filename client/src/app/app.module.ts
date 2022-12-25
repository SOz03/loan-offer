import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {
  BankFormPage,
  BankListPage,
  CreditFilter,
  ModalWindow,
  CreditListPage,
  HomePage,
  LoginPage,
  ProfilePage,
  RegistrationPage,
} from './pages';
import { RefDirecive } from './pages/credits/ref.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    RegistrationPage,
    LoginPage,
    ProfilePage,
    BankFormPage,
    BankListPage,
    CreditListPage,
    CreditFilter,
    ModalWindow,
    HomePage,
    RefDirecive,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
