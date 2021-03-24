import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/service/compte.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  solde: any;


  constructor(private userService: UserService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {

    if (this.tokenStorage.getToken()) {
       // @ts-ignore
      this.id = this.tokenStorage.getInfoUser().id;
       // @ts-ignore
      console.log(this.id);
      console.log(this.tokenStorage.getUser())
      // @ts-ignore
      this.userService.getSolde(this.id).subscribe(
        data=>{
          console.log(this.solde);
          this.solde = data
     this.solde = Array.of(this.solde);

        }
      );
    }
  }

  buttonClick(){

  }
}
