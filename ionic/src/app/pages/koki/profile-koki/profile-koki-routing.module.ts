import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileKokiPage } from './profile-koki.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileKokiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileKokiPageRoutingModule {}
