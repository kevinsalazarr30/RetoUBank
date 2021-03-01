import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabDetailPageRoutingModule } from './tab-detail-routing.module';

import { TabDetailPage } from './tab-detail.page';
import { ComponentsModule } from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TabDetailPage]
})
export class TabDetailPageModule {}
