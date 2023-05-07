import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ValidationCode } from '../models/validation-code.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // https://192.168.110.138:8443/auth-service/open/v1/user/validation-code
  loginValidationApi = 'open/v1/user/validation-code';
  loginPasswordApi = 'oauth/token';
  refreshTokenApi = 'oauth/token';

  currentCredentialSubject: BehaviorSubject<any>;
  currentCredential: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentCredentialSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentCredential')|| '{}'));
    this.currentCredential = this.currentCredentialSubject.asObservable();
  }

  loginValidation(validationCode: ValidationCode) {
    const v = new ValidationCode(validationCode);
    return this.http.post<any>(environment.authApiUrl + this.loginValidationApi, v).pipe(
      map(result => {
        return result;

      }));
  }

  loginPassword(username: string, password: string) {
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', username);
    body.set('password', password);
    body.set('scope', 'user');

    return this.http.post<any>(environment.authApiUrl + this.loginPasswordApi,
      body.toString(),
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: environment.basicAuthorization,
        },
      },
    ).pipe(
      map(result => {
        localStorage.clear();
        const jwtData = result.access_token?.split('.')[1]
        const decodedJwtJsonData = window.atob(jwtData)
        const decodedJwtData = JSON.parse(decodedJwtJsonData);
        const authorities = decodedJwtData.authorities;
        localStorage.setItem('authorities', authorities);
        localStorage.setItem('currentCredential', JSON.stringify(result));
        this.currentCredentialSubject.next(result);
        return result;
      }));

  }

  isLoggedIn() {
    return this.currentCredentialSubject.value !== null;
  }

  logOut() {
    localStorage.clear();
    this.currentCredentialSubject.next(null);
  }

  refreshAccessToken() {
    const body = new URLSearchParams();
    body.set('grant_type', 'refresh_token');
    body.set('refresh_token', this.refresh_token);
    body.set('scope', 'user');
    return this.http.post<any>(environment.authApiUrl + this.refreshTokenApi, body.toString(),
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: environment.basicAuthorization,
        },
      },
    ).pipe(
      map(result => {
        localStorage.clear();
        const jwtData = result.access_token?.split('.')[1]
        const decodedJwtJsonData = window.atob(jwtData)
        const decodedJwtData = JSON.parse(decodedJwtJsonData);
        const authorities = decodedJwtData.authorities;
        localStorage.setItem('authorities', authorities);
        localStorage.setItem('currentCredential', JSON.stringify(result));
        this.currentCredentialSubject.next(result);
        return result;

      }));
  }

  public get access_token() {
    return this.currentCredentialSubject?.value?.access_token;
  }
  public get refresh_token() {
    return this.currentCredentialSubject?.value?.refresh_token;
  }

}
