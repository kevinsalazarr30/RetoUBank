import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabDetailReglasPageRoutingModule } from './tab-detail-reglas-routing.module';

import { TabDetailReglasPage } from './tab-detail-reglas.page';
import { ComponentsModule } from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabDetailReglasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TabDetailReglasPage]
})
export class TabDetailReglasPageModule {}
