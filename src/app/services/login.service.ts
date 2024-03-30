import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginReponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL: string = 'http://localhost:8080/auth/login'

  constructor(private httpClient: HttpClient) {

   }

  login(email: string, password: string) {
    return this.httpClient.post<LoginReponse>(this.apiURL, {
      email,
      password
    }).pipe(
      tap((value) => {
        sessionStorage.setItem('auth-token', value.token)
        sessionStorage.setItem('username', value.name)
      })
    );
  }
}
