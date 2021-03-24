import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonDatetime } from '@ionic/angular';
import { CalculatorService } from 'src/app/service/calculator.service';
import { DepotService } from 'src/app/service/depot.service';


@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
})
export class DepotPage implements OnInit {


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


  constructor(private formBuilder: FormBuilder,private calculator: CalculatorService, private depot: DepotService, private alertController:AlertController  ) { }

  ngOnInit() {
      this.contactForm = this.formBuilder.group({
        cni: ['', Validators.required,],
        prenom: ['',Validators.required],
        nom: ['', Validators.required],
        telephone: ['', [Validators.required]],
        frais: new FormControl({value: '', disabled: true}, Validators.required),
        montant: ['', Validators.required],
        total: new FormControl({value: '', disabled: true}, Validators.required),
        prenom1: ['',Validators.required],
        nom1: ['', Validators.required],
        telephone1: ['', [Validators.required]],
      });

    this.getFrais();

  }

  getFrais(){

    if (this.contactForm.value.montant) {
      const Montant = {
        montant: this.contactForm.value.montant
      }
      this.calculator.getFrais(Montant).subscribe(
        async (data) => {
            console.log(data.Frais);
            this.frais = data.Frais
            this.total = (this.montant)*1 + (this.frais)*1


        },
        (error) => {
          console.log(error);
        }
      )
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

    const form = [
      {
        montant: this.contactForm.value.montant,
        prenom: this.contactForm.value.prenom,
        nom: this.contactForm.value.nom,
        telephone: this.contactForm.value.telephone,
        cni: this.contactForm.value.cni
      },
      {
        prenom: this.contactForm.value.prenom1,
        nom: this.contactForm.value.nom1 ,
        telephone: this.contactForm.value.telephone1,
      }
    ]
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: `<div><p>Emétteur <br> <strong>`+ this.contactForm.value.prenom + ' ' + this.contactForm.value.nom +`</strong></p></div>
                <div><p>Téléphone <br> <strong>`+ this.contactForm.value.telephone +`</strong></p></div>
                <div><p>N°CNI <br> <strong>`+ this.contactForm.value.cni +`</strong></p></div>
                <div><p>Montant à envoyer <br> <strong>`+ this.montant +`</strong></p></div>
                <div><p>Bénéficiaire <br> <strong>`+ this.contactForm.value.prenom1 + ' ' + this.contactForm.value.nom1  +`</strong></p></div>
                <div><p>Téléphone <br> <strong>`+ this.contactForm.value.telephone1 +`</strong></p></div>`,
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
            this.depot.makeShipment(form).subscribe(
              async (data) => {
                this.code = data.code;
                console.log(this.code);
                const alert = await this.alertController.create({
                  cssClass: 'my-custom-class',
                  header: 'Transfert réussi',
                  message: `<div><p>Infos <br> <strong>Vous avez envoyé `+ this.contactForm.value.montant + ' à ' + this.contactForm.value.nom1 + ' ' + this.contactForm.value.prenom1 + `</strong></p></div>
                            <div><p>Code de Transaction: <br> <strong>`+ this.code +`</strong></p></div>`,

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
