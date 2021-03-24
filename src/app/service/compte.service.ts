import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:8000/api/admin/compte';
const API_URLS = 'http://127.0.0.1:8000/api/admin/comptes';
const API_url = 'http://127.0.0.1:8000/api/admin/agences';
@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }
  getCompteById(id: number): Observable<any> {

    return this.http.get(API_URL + '/' + id, { responseType: 'json'});
  }
  addcompte(form):Observable<any> {
    return this.http.post(API_URLS, form, { responseType: 'json'});
  }
  createAgence(form):Observable<any> {
    return this.http.post(API_url, form, { responseType: 'json'});
  }
}
