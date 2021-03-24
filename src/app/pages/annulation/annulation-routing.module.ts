import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnulationPage } from './annulation.page';

const routes: Routes = [
  {
    path: '',
    component: AnnulationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnulationPageRoutingModule {}
