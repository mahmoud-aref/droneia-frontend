import {Routes} from '@angular/router';
import {LoginComponent} from "@application/login/login.component";
import {HomeComponent} from "@application/home/home.component";
import {isLoggedInGuard, tokenAuthGuard} from "@infrastructure/auth/auth.guard";
import {AppComponent} from "@application/app/app.component";
import {ProfileComponent} from "@application/profile/profile.component";
import {DashboardComponent} from "@application/dashboard/dashboard.component";
import {DronesComponent} from "@application/drones/drones.component";
import {ProductsComponent} from "@application/products/products.component";
import {OrdersComponent} from "@application/orders/orders.component";

export const routes: Routes = [
  {path: '', component: AppComponent},
  {
    path: 'home', component: HomeComponent, canActivate: [tokenAuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent, canActivate: [tokenAuthGuard]},
      {path: 'profile', component: ProfileComponent, canActivate: [tokenAuthGuard]},
      {path: 'drones', component: DronesComponent, canActivate: [tokenAuthGuard]},
      {path: 'drones/:id', component: DronesComponent, canActivate: [tokenAuthGuard]},
      {path: 'products', component: ProductsComponent, canActivate: [tokenAuthGuard]},
      {path: 'products/:id', component: ProductsComponent, canActivate: [tokenAuthGuard]},
      {path: 'orders', component: OrdersComponent, canActivate: [tokenAuthGuard]},
      {path: 'orders/:id', component: OrdersComponent, canActivate: [tokenAuthGuard]},
      {path: '**', redirectTo: 'dashboard'}
    ]
  },
  {path: 'login', component: LoginComponent, canActivate: [isLoggedInGuard]},

  {path: '**', redirectTo: '/login'}
];
