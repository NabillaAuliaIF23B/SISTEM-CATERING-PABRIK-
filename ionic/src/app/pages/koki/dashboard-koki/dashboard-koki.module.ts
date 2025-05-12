import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardKokiPageRoutingModule } from './dashboard-koki-routing.module';

import { DashboardKokiPage } from './dashboard-koki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardKokiPageRoutingModule
  ],
  declarations: [DashboardKokiPage]
})
export class DashboardKokiPageModule {}
