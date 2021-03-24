import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepotPageRoutingModule } from './depot-routing.module';

import { DepotPage } from '../depot/depot.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    DepotPageRoutingModule
  ],
  declarations: [DepotPage]
})
export class DepotPageModule {}
