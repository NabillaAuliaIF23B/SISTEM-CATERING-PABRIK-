import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardKokiPage } from './dashboard-koki.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardKokiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardKokiPageRoutingModule {}
