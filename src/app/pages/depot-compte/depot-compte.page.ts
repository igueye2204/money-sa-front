import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CalculatorService } from 'src/app/service/calculator.service';
import { DepotService } from 'src/app/service/depot.service';

@Component({
  selector: 'app-depot-compte',
  templateUrl: './depot-compte.page.html',
  styleUrls: ['./depot-compte.page.scss'],
})
export class DepotComptePage implements OnInit {


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


  constructor(private formBuilder: FormBuilder,private calculator: CalculatorService, private depot: DepotService, private alertController:AlertController  ) { }

  ngOnInit() {
      this.contactForm = this.formBuilder.group({
        compte: ['', Validators.required,],
        montant: ['',Validators.required]
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
        compte: this.contactForm.value.compte,
        montantDepot: this.contactForm.value.montant,
      };

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: `<div><p><strong> Vous allez faire un depot de `+ this.contactForm.value.montant + ' sur le compte numéro ' + this.contactForm.value.compte +`</strong></p></div>`,
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
            this.depot.addDepot(form).subscribe(
              async (data) => {
                this.code = data;
                console.log(this.code);
                const alert = await this.alertController.create({
                  cssClass: 'my-custom-class',
                  header: 'dépôt réussi',
                  message: `<div><p>Infos <br> <strong>Vous avez fait un depot de `+ this.contactForm.value.montant +`fcfa</strong></p></div>`,

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
