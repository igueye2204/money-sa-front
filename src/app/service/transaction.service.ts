import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:8000/api/useragence/transaction';
const API_URLt = 'http://127.0.0.1:8000/api/admin/infotransaction_user';
const API_URLc = 'http://127.0.0.1:8000/api/useragence/transaction/cancel';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransaction(): Observable<any> {

    return this.http.get(API_URL, { responseType: 'json'});
  }

  getInfoTransaction(){

    return this.http.get(API_URLt, { responseType: 'json'});
  }

  cancelTransaction(code){
    return this.http.post(API_URLc, code, { responseType: 'json'});
  }
}
