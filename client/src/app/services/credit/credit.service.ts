import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, retry} from 'rxjs';
import { API_SERVICES } from 'src/app/constants';
import { Credit } from 'src/app/models';
import {AuthService} from "../auth";

@Injectable({
  providedIn: 'root',
})
export class CreditService {
  constructor(private http: HttpClient,private authService: AuthService) {}

  public getAll(): Observable<any> {
    return this.http.get(API_SERVICES.credit, {
      headers: this.authService.requestHeaders
    });
  }

  public get(id: string): Observable<any> {
    return this.http.get(`${API_SERVICES.credit}/${id}`);
  }

  public create(credit: Credit): Observable<any> {
    return this.http.post(API_SERVICES.credit, credit);
  }

  public update(credit: any): Observable<any> {
    return this.http.put(`${API_SERVICES.credit}/${credit.id}`, credit);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(API_SERVICES.credit + '/' + id, {
      headers: this.authService.requestHeaders
    });
  }
}
