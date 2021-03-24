import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:8000/api/admin/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  getSolde(id:number):Observable<any> {

    return this.http.get(API_URL + '/solde/' + id, { responseType: 'json'});
  }
  getUserById(id: number): Observable<any> {
    return this.http.get(API_URL + '/' + id, { responseType: 'json'});
  }
}
