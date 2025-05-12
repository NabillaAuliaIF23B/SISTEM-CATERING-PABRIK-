import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileKokiPageRoutingModule } from './profile-koki-routing.module';

import { ProfileKokiPage } from './profile-koki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileKokiPageRoutingModule
  ],
  declarations: [ProfileKokiPage]
})
export class ProfileKokiPageModule {}
