import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSimulationPageRoutingModule } from './tab-simulation-routing.module';

import { TabSimulationPage } from './tab-simulation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSimulationPageRoutingModule
  ],
  declarations: [TabSimulationPage]
})
export class TabSimulationPageModule {}
