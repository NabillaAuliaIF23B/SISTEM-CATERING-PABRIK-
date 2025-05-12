import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahKaryawanPage } from './tambah-karyawan.page';

const routes: Routes = [
  {
    path: '',
    component: TambahKaryawanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahKaryawanPageRoutingModule {}
