import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSimulationPage } from './tab-simulation.page';

const routes: Routes = [
  {
    path: '',
    component: TabSimulationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSimulationPageRoutingModule {}
