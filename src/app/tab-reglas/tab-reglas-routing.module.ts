import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabReglasPage } from './tab-reglas.page';

const routes: Routes = [
  {
    path: '',
    component: TabReglasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabReglasPageRoutingModule {}
