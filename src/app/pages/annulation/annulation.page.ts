import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { RetraitService } from 'src/app/service/retrait.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-annulation',
  templateUrl: './annulation.page.html',
  styleUrls: ['./annulation.page.scss'],
})
export class AnnulationPage implements OnInit {

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
  id: any;
  emetteur: any;
  recepteur: any;

  constructor(private formBuilder: FormBuilder, private retraitService: RetraitService, private alertController: AlertController, private transactionService: TransactionService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      codeTransaction: ['', Validators.required,],
      cni: ['', Validators.required,],
      prenom: ['',Validators.required],
      nom: ['', Validators.required],
      telephone: ['', [Validators.required]],
      montant: ['', Validators.required],
      date: ['', [Validators.required]],
      cni1: ['', Validators.required,],
      prenom1: ['',Validators.required],
      nom1: ['', Validators.required],
      montant1: ['', Validators.required],
      telephone1: ['', [Validators.required]],
      date1: ['', [Validators.required]],
    });

    this.check();
  }

  get f(){
    return  this.contactForm.controls;
 }

  check(){

    if (this.contactForm.value.codeTransaction) {
      const Code = {
        codeTransaction : this.contactForm.value.codeTransaction
      }
      this.retraitService.checkCode(Code).subscribe(
        async (data)=>{
          console.log(data);

          data.forEach(element => {
              console.log(element);
              this.code = element.codeTransaction;
              this.id = element.id;
              this.recepteur = element.recuperer;
              this.emetteur = element.envoyer;
              this.contactForm = this.formBuilder.group({
                codeTransaction: [ this.code, Validators.required],
                cni: [ this.recepteur.CNI, Validators.required],
                prenom: [ this.recepteur.prenom,Validators.required],
                nom: [ this.recepteur.nom, Validators.required],
                montant: [ element.montant, [Validators.required]],
                telephone: [ this.recepteur.phone, Validators.required],
                date: [ element.dateDepot, Validators.required],
                cni1: [ this.emetteur.CNI, Validators.required],
                prenom1: [ this.emetteur.prenom,Validators.required],
                nom1: [ this.emetteur.nom, Validators.required],
                montant1: [ element.montant, [Validators.required]],
                telephone1: [ this.emetteur.phone, Validators.required],
                date1: [ element.dateDepot, Validators.required]
              });


            });



        },
        (error)=>{
          console.log(error);
        }
      )
    }

  }

  showAndHide(){
    this.isHidden = true;
  }

  show0(){
    this.isHidden = false;
  }

  async onSubmit(){

    const Code = {
      codeTransaction : this.contactForm.value.codeTransaction
    }

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: `<div><p>Bénéficiaire <br> <strong>`+ this.contactForm.value.prenom + ' ' + this.contactForm.value.nom +`</strong></p></div>
                <div><p>Téléphone <br> <strong>`+ this.contactForm.value.telephone +`</strong></p></div>
                <div><p>N°CNI <br> <strong>`+ this.contactForm.value.cni +`</strong></p></div>
                <div><p>Montant reçu <br> <strong>`+ this.contactForm.value.montant +`</strong></p></div>
                <div><p>Emetteur <br> <strong>`+ this.contactForm.value.prenom1 + ' ' + this.contactForm.value.nom1  +`</strong></p></div>
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
          text: 'confirmer annulation',
          handler: () => {
            console.log('Confirm Okay');
            this.transactionService.cancelTransaction(Code).subscribe(
                async (data)=>{
                    console.log(data);
                    this.code = data;
                    console.log(this.code);
                    const alert = await this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Annulation réussi',
                      message: `<div><p>Infos <br> <strong>Votre dépôt de `+ this.contactForm.value.montant + ' pour ' + this.contactForm.value.nom + ' ' + this.contactForm.value.prenom +` a été annulé avec succés</strong></p><br> <strong> Merci et à bientot!</strong></div>`,

                      buttons: [
                        {
                          text: 'Okay',
                          handler: () => {}
                        }
                      ]
                    })
                    await alert.present();
                    console.log(Code);
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
       console.log(Code);
  }


}
