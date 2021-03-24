import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form:any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[]  = [];
  submitted = false;
  loading = true
  contactForm: FormGroup;

  constructor(private tokenStorage: TokenStorageService,
              private authService: AuthService,
              private router: Router,
              private navctlr: NavController,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      username: ['', Validators.required,],
      password: ['',Validators.required]
    })
    this.loading = false
    console.log(this.tokenStorage.getToken())
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
       // @ts-ignore
      this.roles = this.tokenStorage.getInfoUser().roles[0];
      console.log(this.roles);
      console.log(this.tokenStorage.getUser())
    }
  }

  get f(){
    return  this.contactForm.controls;
 }

  onSubmit(): void {
    const form = {
      username: this.contactForm.value.username,
      password: this.contactForm.value.password,
    }
    this.submitted = true;
    this.loading = true
    this.authService.login(form).subscribe(

      (data) => {
        this.loading = false
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        console.log(this.tokenStorage.getInfoUser());

        this.isLoginFailed = false;
        this.isLoggedIn = true;
         // @ts-ignore

        this.roles = this.tokenStorage.getInfoUser();
        const link = ['home'];
        this.navctlr.navigateForward(link);
        setTimeout(() => {
          window.location.reload();
        }, 1);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }


  reloadPage(): void {
    window.location.reload();
  }

}
