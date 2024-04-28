import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {LoginModel} from "@infrastructure/auth/login.model";
import {Observable} from "rxjs";
import {TokenResponse} from "@infrastructure/auth/token.response";
import {BASE} from "@infrastructure/base.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient ) {
  }

  login(loginModel: LoginModel): Observable<TokenResponse> {
    return this.httpClient.post<TokenResponse>(`${BASE.URL + BASE.TOKEN}`, loginModel);
  }

}
