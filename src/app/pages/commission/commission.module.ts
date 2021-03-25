import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommissionPageRoutingModule } from './commission-routing.module';

import { CommissionPage } from './commission.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommissionPageRoutingModule,
    JwPaginationModule
  ],
  declarations: [CommissionPage]
})
export class CommissionPageModule {}
