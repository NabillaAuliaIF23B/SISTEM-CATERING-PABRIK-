import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard-hrga',
    loadChildren: () => import('./pages/hrga/dashboard-hrga/dashboard-hrga.module').then( m => m.DashboardHrgaPageModule)
  },
  {
    path: 'dashboard-koki',
    loadChildren: () => import('./pages/koki/dashboard-koki/dashboard-koki.module').then( m => m.DashboardKokiPageModule)
  },
  {
    path: 'dashboard-karyawan',
    loadChildren: () => import('./pages/karyawan/dashboard-karyawan/dashboard-karyawan.module').then( m => m.DashboardKaryawanPageModule)
  },
  {
    path: 'data-karyawan',
    loadChildren: () => import('./pages/hrga/data-karyawan/data-karyawan.module').then( m => m.DataKaryawanPageModule)
  },
  {
    path: 'tambah-karyawan',
    loadChildren: () => import('./pages/hrga/tambah-karyawan/tambah-karyawan.module').then( m => m.TambahKaryawanPageModule)
  },
  {
    path: 'profile-hrga',
    loadChildren: () => import('./pages/hrga/profile-hrga/profile-hrga.module').then( m => m.ProfileHrgaPageModule)
  },
  {
    path: 'profile-koki',
    loadChildren: () => import('./pages/koki/profile-koki/profile-koki.module').then( m => m.ProfileKokiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
