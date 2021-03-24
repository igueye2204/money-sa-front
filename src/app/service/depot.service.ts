import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:8000/api/useragence/transaction/send';
const API_URLS = 'http://127.0.0.1:8000/api/admin/depot';
@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private http: HttpClient) { }

  makeShipment(form): Observable<any> {

    return this.http.post(API_URL, form, { responseType: 'json'});
  }
  addDepot(form){
    return this.http.post(API_URLS, form, { responseType: 'json'});
  }
}
