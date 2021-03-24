import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CalculatorService } from 'src/app/service/calculator.service';
import { CompteService } from 'src/app/service/compte.service';
import { DepotService } from 'src/app/service/depot.service';

@Component({
  selector: 'app-create-compte',
  templateUrl: './create-compte.page.html',
  styleUrls: ['./create-compte.page.scss'],
})
export class CreateComptePage implements OnInit {

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


  constructor(private formBuilder: FormBuilder, private compte: CompteService, private alertController:AlertController  ) { }

  ngOnInit() {
      this.contactForm = this.formBuilder.group({
        agence: ['', Validators.required,],
        solde: ['', Validators.required,],
        address: ['',Validators.required]
      });

  }




  showAndHide(){
    this.isHidden = true;
  }

  show0(){
    this.isHidden = false;
  }

   async onSubmit(){

    const form ={
        solde: this.contactForm.value.solde,
        addressAgence: this.contactForm.value.address,
        agence: this.contactForm.value.agence
      };

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: `<div><p><strong> Vous allez creer un nouveau agence avec un nouveau compte</strong></p></div>`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
         {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.compte.createAgence(form).subscribe(
                (data)=>{
                  console.log(data);

                  this.compte.addcompte(form).subscribe(
                    async (data) => {
                      this.code = data;
                      console.log(this.code);
                      const alert = await this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'dépôt réussi',
                        message: `<div><p>Infos <br> <strong>Vous avez creer un nouveau compte avec un nom d'agence: `+ this.contactForm.value.agence + ' à '+ this.contactForm.value.address +' avec un nouveau solde de '+ this.contactForm.value.solde +`</strong></p></div>`,

                        buttons: [
                          {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                              console.log('Confirm Cancel: blah');
                              this.reloadPage()

                            }
                          },{
                            text: 'Okay',
                            handler: () => {}

                          }
                        ]
                      })
                      await alert.present();
                      console.log(form);
                  },
                  (error) => {
                    console.log(error);
                  }
                   )
                },
                (error)=>{
                  console.log(error);
                }
            )

          }
        }
      ]
    });

    await alert.present();
     console.log(form);

  }

reloadPage(): void {
    window.location.reload();
  }


}
