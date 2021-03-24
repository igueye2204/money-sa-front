import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommissionPageRoutingModule } from './commission-routing.module';

import { CommissionPage } from './commission.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommissionPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [CommissionPage]
})
export class CommissionPageModule {}
