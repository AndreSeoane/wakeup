import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolhasPageRoutingModule } from './escolhas-routing.module';

import { EscolhasPage } from './escolhas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolhasPageRoutingModule
  ],
  declarations: [EscolhasPage]
})
export class EscolhasPageModule {}
