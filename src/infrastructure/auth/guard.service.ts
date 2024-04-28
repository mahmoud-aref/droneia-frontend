import {inject, Injectable} from '@angular/core';
import {CanActivateFn, Router} from "@angular/router";
import {TokenService} from "@infrastructure/auth/token.service";

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private tokenService: TokenService) {
  }

  public canActivate(): boolean {
    return this.tokenService.isTokenValid();
  }

}

export const TokenAuthGuard: CanActivateFn = () => {
  return inject(GuardService).canActivate()
    ? true
    : inject(Router).createUrlTree(['/login']);
};

export const LoggedInAuthGuard: CanActivateFn = () => {
  return inject(GuardService).canActivate()
    ? inject(Router).createUrlTree(['/home'])
    : true;
}
