import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahKaryawanPageRoutingModule } from './tambah-karyawan-routing.module';

import { TambahKaryawanPage } from './tambah-karyawan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahKaryawanPageRoutingModule
  ],
  declarations: [TambahKaryawanPage]
})
export class TambahKaryawanPageModule {}
