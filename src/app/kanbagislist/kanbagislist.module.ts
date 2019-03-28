import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KanbagislistPage } from './kanbagislist.page';

const routes: Routes = [
  {
    path: '',
    component: KanbagislistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KanbagislistPage]
})
export class KanbagislistPageModule {}
