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
  constructor(private tokenStorageService: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.tokenStorageService.getToken()) {
      // @ts-ignore
    this.id = this.tokenStorageService.getInfoUser().id;
      // @ts-ignore
    console.log(this.id);
    console.log(this.tokenStorageService.getUser())
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
