import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profil } from '../models/profil';

const API_URL = 'http://127.0.0.1:8000/api/admin/profils';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }


  postProfil(profil:Profil): Observable<any>{
    return this.http.post<Profil>(API_URL, profil);
  }

  //Get all profil

  getAllProfil(): Observable<any> {
    return this.http.get(API_URL , { responseType: 'json'});
  }

  //get One profil

  getProfilById(id: number): Observable<any> {
    return this.http.get(API_URL + '/' + id);
  }

  //update profil

  updateProfilById(id: number, profil:Profil): Observable<any> {
    return this.http.put(API_URL + '/' + id, profil);
  }

  //delete profil

  deleteProfilById(id: number): Observable<any> {
    return this.http.delete(API_URL + '/' + id, {headers: new HttpHeaders, responseType: 'blob'});
  }

  // profil deleted
  getProfilDeleted(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/admin/profilsdeleted', { responseType: 'json' });
 }

 // desarchive profil

 desarchiveProfil(id: number): Observable<any> {
  return this.http.delete(API_URL + '/desarchive/' + id, {headers: new HttpHeaders, responseType: 'blob'})
}
}
