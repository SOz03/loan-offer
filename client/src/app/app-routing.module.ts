import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard, HomeGuard } from './guards';
import {
  LoginPage,
  RegistrationPage,
  BankFormPage,
  BankListPage,
  ProfilePage,
  CreditListPage,
  HomePage
} from './pages';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginPage,
    canActivate: [HomeGuard],
  },
  {
    path: 'register',
    component: RegistrationPage,
    canActivate: [HomeGuard],
  },
  {
    path: 'banks/create',
    component: BankFormPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'banks',
    component: BankListPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'credits',
    component: CreditListPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: '#',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard, HomeGuard],
})
export class AppRoutingModule {}
