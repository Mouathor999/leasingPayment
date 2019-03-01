import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { JdbBankRoutingModule } from './jdb-bank-routing.module';
import { JdbBankComponent } from './jdb-bank.component';
import { MainHeaderComponent } from './main-header/main-header.component';

import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { JdbHomeComponent } from './jdb-home/jdb-home.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { TransactionReportComponent } from './transaction-report/transaction-report.component';
import { ReprintSlipComponent } from './reprint-slip/reprint-slip.component';
import { ChangPasswprdComponent } from './chang-passwprd/chang-passwprd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    JdbBankRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  declarations: [
    JdbBankComponent,
    MainHeaderComponent,
    JdbHomeComponent,
    MakePaymentComponent,
    TransactionReportComponent,
    ReprintSlipComponent,
    ChangPasswprdComponent
  ]
})
export class JdbBankModule { }
