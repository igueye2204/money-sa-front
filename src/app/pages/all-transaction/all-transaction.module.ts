import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllTransactionPageRoutingModule } from './all-transaction-routing.module';

import { AllTransactionPage } from './all-transaction.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllTransactionPageRoutingModule,
    NgxPaginationModule,
    JwPaginationModule
  ],
  declarations: [AllTransactionPage]
})
export class AllTransactionPageModule {}
