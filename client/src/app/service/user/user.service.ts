import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080'
const URL = '/bank';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + URL + 'public', { responseType: 'text' });
  }

  getRegistered(): Observable<any> {
    return this.http.get(API_URL + URL + 'registered', { responseType: 'text' });
  }

  getPrivate(): Observable<any> {
    return this.http.get(API_URL + URL + 'private', { responseType: 'text' });
  }
}
