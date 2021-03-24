import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepotComptePageRoutingModule } from './depot-compte-routing.module';

import { DepotComptePage } from './depot-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepotComptePageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [DepotComptePage]
})
export class DepotComptePageModule {}
