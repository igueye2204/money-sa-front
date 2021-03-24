import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private jwtService: JwtService) {
  }

  object : string | undefined;

  signOut(): void {
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: string ): void {
    window.localStorage.removeItem(USER_KEY);
     window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }

  public getInfoUser(){
    return this.jwtService.DecodeToken(localStorage.getItem(TOKEN_KEY));
  }
}
