import {Routes} from '@angular/router';
import {LoginComponent} from "@application/login/login.component";
import {HomeComponent} from "@application/home/home.component";
import {LoggedInAuthGuard, TokenAuthGuard} from "@infrastructure/auth/guard.service";

export const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [TokenAuthGuard]},

];
