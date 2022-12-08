import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080'
const AUTH_API = '/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(API_URL + AUTH_API + 'login', {
      login: username,
      password
    }, httpOptions);
  }

  register(login: string, email: string, password: string): Observable<any> {
    return this.http.post(API_URL + AUTH_API + 'register', {
      login,
      email,
      password
    }, httpOptions);
  }
}
