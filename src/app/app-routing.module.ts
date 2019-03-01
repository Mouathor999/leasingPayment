import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'jdb-bank/leasing-payment',
    loadChildren: './jdb-bank/jdb-bank.module#JdbBankModule'
  },
  {
    path: 'jdb/krungsri/home',
    loadChildren: './krungsri/krungsri.module#KrungsriModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
