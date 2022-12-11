import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bank } from '../bank/bank';
import { Observable } from 'rxjs';

@Injectable()
export class BankService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/bank';
  }

  public findAll(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.url + '/filter');
  }

  public save(bank: Bank) {
    return this.http.post<Bank>(this.url, bank);
  }
}
