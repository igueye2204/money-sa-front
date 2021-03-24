import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  solde: any;
  date = new Date;
  User: any;
  imgSrc: string;
  roles: string;
  adminAgence = false;
  admin = false;


  constructor(private userService: UserService, private tokenStorage: TokenStorageService, private navcontroler: NavController) { }

  ngOnInit() {

      if (this.tokenStorage.getToken()) {
        // @ts-ignore
        this.id = this.tokenStorage.getInfoUser().id;
         // @ts-ignore
         this.roles = this.tokenStorage.getInfoUser().roles[0];
        // @ts-ignore
        console.log(this.roles);
        if (this.roles === 'ROLE_ADMINAGENCE') {
          this.adminAgence = true;
        }
        if(this.roles === 'ROLE_ADMIN'){
          this.admin = true;
        }
        //@ts-ignore
        this.userService.getUserById(this.id).subscribe(
          (data)=>{
            this.User = data;
            this.imgSrc = "data:image/jpeg;base64," + this.User.avatar;
            console.log(data);
          },
          (error)=>{
            console.log(error);

          }
        )
      // @ts-ignore
      this.userService.getSolde(this.id).subscribe(
        data=>{
          this.solde = data
          console.log(data);
     this.solde = Array.of(this.solde);

        }
      );
    }
  }

  buttonClickDepot(){
    this.navcontroler.navigateRoot('depot');
  }
  buttonClickRetrait(){
    this.navcontroler.navigateRoot('retrait');
  }
  buttonClickTransaction(){
    this.navcontroler.navigateRoot('transaction');
  }
  buttonClickCalculateur(){
    this.navcontroler.navigateRoot('calculateur');
  }
  buttonClickCommission(){
    this.navcontroler.navigateRoot('commission');
  }
  buttonClickAllTransaction(){
    this.navcontroler.navigateRoot('all-transaction');
  }
  buttonClickAnnulation(){
    this.navcontroler.navigateRoot('annulation');
  }
  buttonClickDepotCompte(){
    this.navcontroler.navigateRoot('depot-compte');
  }
  buttonClickcreateCompte(){
    this.navcontroler.navigateRoot('create-compte');
  }
  logout(): void {
    this.tokenStorage.signOut();
  }
  goProfile(){
    this.navcontroler.navigateRoot('profile');
  }
}
