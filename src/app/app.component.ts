import { Component } from '@angular/core';
import { TokenStorageService } from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isLoggedIn = false;
  roles: any;
  adminAgence: boolean;
  admin: boolean;
  caissier: boolean;
  userAgence: boolean;
  constructor(private tokenStorageService: TokenStorageService) { }

ngOnInit(): void {

  this.isLoggedIn = !!this.tokenStorageService.getToken();

  if (this.isLoggedIn) {

    const user = this.tokenStorageService.getInfoUser();
    //@ts-ignore
    this.roles = this.tokenStorageService.getInfoUser().roles[0];
    // @ts-ignore
    this.username = user.username;

    switch (this.roles) {

      case 'ROLE_ADMINAGENCE':{
        this.adminAgence = true;
        break;
      }
      case 'ROLE_ADMIN':{
        this.admin = true;
        break;
      }
      case 'ROLE_CAISSIER':{
        this.caissier = true;
        break;
      }
      case 'ROLE_USERAGENCE':{
        this.userAgence = true;
        break;
      }
      default:
        break;
    }

    }
  }
  logout(): void {
    this.tokenStorageService.signOut();

  }
}
