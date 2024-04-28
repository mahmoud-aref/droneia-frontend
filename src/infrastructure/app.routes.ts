import {Routes} from '@angular/router';
import {LoginComponent} from "@application/login/login.component";
import {HomeComponent} from "@application/home/home.component";
import {isLoggedInGuard, tokenAuthGuard} from "@infrastructure/auth/auth.guard";
import {AppComponent} from "@application/app/app.component";
import {ProfileComponent} from "@application/profile/profile.component";

export const routes: Routes = [
  {path: '', component: AppComponent},
  {
    path: 'home', component: HomeComponent, canActivate: [tokenAuthGuard],
    children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent, canActivate: [tokenAuthGuard]}
    ]
  },
  {path: 'login', component: LoginComponent, canActivate: [isLoggedInGuard]},

  {path: '**', redirectTo: '/login'}
];
