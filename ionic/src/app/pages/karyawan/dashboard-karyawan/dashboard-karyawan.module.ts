import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardKaryawanPageRoutingModule } from './dashboard-karyawan-routing.module';

import { DashboardKaryawanPage } from './dashboard-karyawan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardKaryawanPageRoutingModule
  ],
  declarations: [DashboardKaryawanPage]
})
export class DashboardKaryawanPageModule {}
