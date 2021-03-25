import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {



  isLoggedIn = false;
  User: any;
  imgSrc: string;
  roles: any;
  adminAgence: boolean;
  admin: boolean;
  caissier: boolean;
  userAgence: boolean;
  
  constructor(private tokenStorageService: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.tokenStorageService.getToken()) {
      // @ts-ignore
    this.id = this.tokenStorageService.getInfoUser().id;
      // @ts-ignore
      this.roles = this.tokenStorageService.getInfoUser().roles[0];
      // @ts-ignore
      console.log(this.roles);

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
    //@ts-ignore
    this.userService.getUserById(this.id).subscribe(
      (data)=>{
        this.User = data;
        this.imgSrc = "data:image/jpeg;base64," + this.User.avatar;
        console.log(data.avatar);
        this.User = Array.of(data);
      },
      (error)=>{
        console.log(error);

      }
    )
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();

  }

}
