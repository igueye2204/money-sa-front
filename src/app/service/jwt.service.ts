import { Injectable } from '@angular/core';
import  jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  //const helper = new JwtHelperService();

  // const decodedToken = helper.decodeToken(token);
  // const expirationDate = helper.getTokenExpirationDate(myRtawToken);
  // const isExpired = helper.isTokenExpired(myRawToken);
  constructor() { }

  DecodeToken(token: string): string {
    return jwt_decode(token);
    }
}
