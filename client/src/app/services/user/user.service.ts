import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_SERVICES } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  // getPublicContent(): Observable<any> {
  //   return this.http.get(`${API_SERVICES.bank}/public`, { responseType: 'text' });
  // }
  //
  // getRegistered(): Observable<any> {
  //   return this.http.get(`${API_SERVICES.bank}/registered`, { responseType: 'text' });
  // }
  //
  // getPrivate(): Observable<any> {
  //   return this.http.get(`${API_SERVICES.bank}/private`, { responseType: 'text' });
  // }
}
