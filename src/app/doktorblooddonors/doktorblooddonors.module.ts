import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DoktorblooddonorsPage } from './doktorblooddonors.page';

const routes: Routes = [
  {
    path: '',
    component: DoktorblooddonorsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DoktorblooddonorsPage]
})
export class DoktorblooddonorsPageModule {}
