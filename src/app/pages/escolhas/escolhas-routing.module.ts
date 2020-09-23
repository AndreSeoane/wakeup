import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolhasPage } from './escolhas.page';

const routes: Routes = [
  {
    path: '',
    component: EscolhasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolhasPageRoutingModule {}
