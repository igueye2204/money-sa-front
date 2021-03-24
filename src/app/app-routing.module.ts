import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'calculateur',
    loadChildren: () => import('./pages/calculateur/calculateur.module').then( m => m.CalculateurPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./pages/transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'depot',
    loadChildren: () => import('./pages/depot/depot.module').then( m => m.DepotPageModule)
  },
  {
    path: 'retrait',
    loadChildren: () => import('./pages/retrait/retrait.module').then( m => m.RetraitPageModule)
  },
  {
    path: 'commission',
    loadChildren: () => import('./pages/commission/commission.module').then( m => m.CommissionPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'all-transaction',
    loadChildren: () => import('./pages/all-transaction/all-transaction.module').then( m => m.AllTransactionPageModule)
  },
  {
    path: 'annulation',
    loadChildren: () => import('./pages/annulation/annulation.module').then( m => m.AnnulationPageModule)
  },
  {
    path: 'depot-compte',
    loadChildren: () => import('./pages/depot-compte/depot-compte.module').then( m => m.DepotComptePageModule)
  },
  {
    path: 'create-compte',
    loadChildren: () => import('./pages/create-compte/create-compte.module').then( m => m.CreateComptePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
