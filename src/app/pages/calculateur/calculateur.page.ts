import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CalculatorService } from 'src/app/service/calculator.service';

@Component({
  selector: 'app-calculateur',
  templateUrl: './calculateur.page.html',
  styleUrls: ['./calculateur.page.scss'],
})
export class CalculateurPage implements OnInit {

  contactForm:FormGroup;


  constructor(private formBuilder: FormBuilder, private calculator: CalculatorService, public alertController: AlertController) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({

      montant: ['', Validators.required]
    });
  }

  onSubmit(){
    console.log(this.contactForm.value);

    this.calculator.getFrais(this.contactForm.value).subscribe(
      async (data) => {
          console.log(data.Frais);

            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: 'Calculateur',
              message: 'Pour une transaction de ' + this.contactForm.value.montant + ',  le frais est est égal à: <h4 style="color: black;font-weight: bolder;">'+ data.Frais +'</h4>',
              buttons: ['Retour']
            });

            await alert.present();

      },
      (error) => {
        console.log(error);
      }
    )
  }
}


