import {inject} from '@angular/core';
import {CanActivateFn, MaybeAsync, Router} from "@angular/router";
import {TokenService} from "@infrastructure/auth/token.service";
import {map, of} from "rxjs";


export const tokenAuthGuard: MaybeAsync<CanActivateFn> = () => {
  const tokenService = inject(TokenService);
  let isValid = tokenService.isTokenValid();
  if (isValid === null) {
    return of(false)
  }
  return isValid.pipe(map(response => response.valid));
};

export const isLoggedInGuard: MaybeAsync<CanActivateFn> = (route, state) => {
  const tokenService = inject(TokenService);
  return tokenService.getToken() == null;
}
