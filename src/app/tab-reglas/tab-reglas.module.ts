import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabReglasPageRoutingModule } from './tab-reglas-routing.module';

import { TabReglasPage } from './tab-reglas.page';
import { ComponentsModule } from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabReglasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TabReglasPage]
})
export class TabReglasPageModule {}
