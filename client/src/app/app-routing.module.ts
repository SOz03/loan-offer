import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";

const appRoutes: Routes = [
  { path: '/auth/login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
