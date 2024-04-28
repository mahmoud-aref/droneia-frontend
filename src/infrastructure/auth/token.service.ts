import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TokenResponse} from "@infrastructure/auth/token.response";
import {BASE} from "@infrastructure/base.model";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  TOKEN_KEY = "TOKEN";

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {
  }

  saveToken(token: string): void {
    this.cookieService.set(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return this.cookieService.get(this.TOKEN_KEY);
  }

  clearToken(): void {
    this.cookieService.delete(this.TOKEN_KEY);
  }

  isTokenValid(): Observable<TokenResponse> | null {
    if (this.getToken()) {
      return this.httpClient.get<TokenResponse>(`${BASE.URL + BASE.VALIDATE}`);
    } else return null;
  }
}
