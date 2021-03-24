import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL =  'http://127.0.0.1:8000/api/useragence/calculateur';
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  getFrais(montant): Observable<any> {

    return this.http.post(API_URL, montant, {responseType: 'json'});
  }
}
