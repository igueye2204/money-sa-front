import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { HomePage } from '../home/home.page';
import { HomePageModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    HomePageModule

  ],
  declarations: [
    ]
})

export class AdminPageModule {}
