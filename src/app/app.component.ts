import { Component } from '@angular/core';
import { TokenStorageService } from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isLoggedIn = false;
  constructor(private tokenStorageService: TokenStorageService) { }

ngOnInit(): void {

  this.isLoggedIn = !!this.tokenStorageService.getToken();

  if (this.isLoggedIn) {

    const user = this.tokenStorageService.getInfoUser();
    // @ts-ignore
    this.roles = user.roles;
    // @ts-ignore
    this.username = user.username;

    }
  }
  logout(): void {
    this.tokenStorageService.signOut();

  }
}
