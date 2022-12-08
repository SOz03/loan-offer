import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as uuid from 'uuid';

const API_URL = 'http://localhost:8080'
const URL = '/bank';

//window["apiUrl"]
@Injectable({
  providedIn: 'root'
})
export class BankService {
  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<any> {
    return this.http.get(API_URL + URL);
  }

  public get(id: string): Observable<any> {
    return this.http.get(API_URL + URL + '/' + id);
  }

  public create(bank: any): Observable<any> {
    return this.http.post(API_URL + URL, bank);
  }

  public update(bank: any): Observable<any> {
    return this.http.put(API_URL + URL + '/' + bank.id, bank);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(API_URL + URL + '/' + id);
  }

}
