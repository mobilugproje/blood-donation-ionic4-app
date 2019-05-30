import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubegoruntulePage } from './subegoruntule.page';

const routes: Routes = [
  {
    path: '',
    component: SubegoruntulePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubegoruntulePage]
})
export class SubegoruntulePageModule {}
