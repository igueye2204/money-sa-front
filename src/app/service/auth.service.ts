import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(credentials: { username: string; password: string; }): Observable<any> {
    return this.http.post(this.url + 'login', {
      username: credentials.username,
      password: credentials.password
    });
  }}
