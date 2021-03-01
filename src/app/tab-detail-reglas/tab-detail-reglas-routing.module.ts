import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabDetailReglasPage } from './tab-detail-reglas.page';

const routes: Routes = [
  {
    path: '',
    component: TabDetailReglasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabDetailReglasPageRoutingModule {}
