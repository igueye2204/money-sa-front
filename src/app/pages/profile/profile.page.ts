import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // @ts-ignore
  id: number;
  User: any;
  imgSrc = "";

  currentUser: any

  constructor(private token: TokenStorageService, private Userservice: UserService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.token.getInfoUser().id;
    console.log(this.id)
     this.currentUser = this.token.getInfoUser();

    this.Userservice.getUserById(this.id).subscribe(
      data=>{
        this.User = data;
        this.imgSrc = "data:image/jpeg;base64," + this.User.avatar;
         this.User = Array.of(this.User);
      }
    )

  }

}
