import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KrungsriRoutingModule } from './krungsri-routing.module';
import { KrungsriComponent } from './krungsri.component';

@NgModule({
  imports: [
    CommonModule,
    KrungsriRoutingModule
  ],
  declarations: [KrungsriComponent]
})
export class KrungsriModule { }
