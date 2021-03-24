import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateComptePageRoutingModule } from './create-compte-routing.module';

import { CreateComptePage } from './create-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateComptePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateComptePage]
})
export class CreateComptePageModule {}
