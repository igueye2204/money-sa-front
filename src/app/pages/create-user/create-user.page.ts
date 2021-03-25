import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CalculatorService } from 'src/app/service/calculator.service';
import { CostumevalidationService } from 'src/app/service/costumevalidation.service';
import { ProfilService } from 'src/app/service/profil.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  contactForm:FormGroup;
  form: any = {};
  element:any;
  isHidden: boolean = false;
  pageActive: number= 1;
  montant:number;
  total:number;
  frais: any;
  date = new Date;
  code: any;
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  imgSrc: string = "/assets/images/images.png";
  profil: any;


  constructor(private profilService: ProfilService, private formBuilder: FormBuilder, private userService: UserService, private alertController:AlertController, private customValidator: CostumevalidationService,   ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      username: ['', Validators.required],
      prenom: ['',Validators.required],
      nom: ['', Validators.required],
      cni: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      profil: ['', Validators.required],
      avatar: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: this.customValidator.MatchPassword('password', 'confirmPassword')
    });

    this.profilService.getAllProfil().subscribe(
      (data)=>{

        console.log(data);
        this.profil = data;
        data.forEach(element => {
          console.log(Array.of(element.libelle));
        });

      },
      (error)=>{
        console.log(error);

      }
    )
  }

  onFileSelect(event: any): void{
    if (event.target.files.length > 0) {

      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      const file = event.target.files[0];
      this.contactForm.get('avatar').setValue(file);

      }
    }

    get f(){
      return  this.contactForm.controls;
   }

  showAndHide(){
    this.isHidden = true;
  }

  show0(){
    this.isHidden = false;
  }

   async onSubmit(){

    this.submitted = true;

    const formdata = new FormData();

    formdata.append('username', this.contactForm.get('username').value);
    formdata.append('password', this.contactForm.get('password').value);
    formdata.append('prenom', this.contactForm.get('prenom').value);
    formdata.append('nom', this.contactForm.get('nom').value);
    formdata.append('cni', this.contactForm.get('cni').value);
    formdata.append('phone', this.contactForm.get('phone').value);
    formdata.append('address', this.contactForm.get('address').value);
    formdata.append('profil', this.contactForm.get('profil').value);
    formdata.append('avatar', this.contactForm.get('avatar').value);

    this.userService.postUser(formdata).subscribe(
     async (event) => {
        console.log(event)
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        // setTimeout(() => {

        //    window.location.reload();

        // }, 500);
        // window.location.reload();
      } ,
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
   }
}
