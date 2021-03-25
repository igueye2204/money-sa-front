import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionPageRoutingModule } from './transaction-routing.module';

import { TransactionPage } from './transaction.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionPageRoutingModule,
    JwPaginationModule
  ],
  declarations: [TransactionPage]
})
export class TransactionPageModule {}
