import { ChangPasswprdComponent } from './chang-passwprd/chang-passwprd.component';
import { ReprintSlipComponent } from './reprint-slip/reprint-slip.component';
import { TransactionReportComponent } from './transaction-report/transaction-report.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { JdbHomeComponent } from './jdb-home/jdb-home.component';
import { JdbBankComponent } from './jdb-bank.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: JdbBankComponent,
    children: [
      {
        path: 'home',
        component: JdbHomeComponent
      },
      {
        path: 'make-payment',
        component: MakePaymentComponent
      },
      {
        path: 'transaction-report',
        component: TransactionReportComponent
      },
      {
        path: 'reprint-slip',
        component: ReprintSlipComponent
      },
      {
        path: 'chang-password',
        component: ChangPasswprdComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JdbBankRoutingModule { }
