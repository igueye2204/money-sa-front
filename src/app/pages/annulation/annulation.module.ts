import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnulationPageRoutingModule } from './annulation-routing.module';

import { AnnulationPage } from './annulation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnulationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AnnulationPage]
})
export class AnnulationPageModule {}
