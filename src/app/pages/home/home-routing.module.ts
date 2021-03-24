import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
 {
   path: '',
  component: HomePage,
  children:[
    {
      path: 'profile',
      loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
