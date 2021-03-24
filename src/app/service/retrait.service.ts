import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:8000/api/useragence/transaction/checkcode';
const API_URLs = 'http://127.0.0.1:8000/api/useragence/transaction/collection/';

@Injectable({
  providedIn: 'root'
})
export class RetraitService {

  constructor(private http: HttpClient) { }

  checkCode(code): Observable<any> {

    return this.http.post(API_URL, code, {responseType: 'json'});
  }

  withdraw(id, form): Observable<any> {

    return this.http.put(API_URLs + id, form,  {responseType: 'json'});
  }
}
