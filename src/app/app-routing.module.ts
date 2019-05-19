import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'giris', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'giris', loadChildren: './giris/giris.module#GirisPageModule' },
  { path: 'kayit', loadChildren: './kayit/kayit.module#KayitPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'kanbagis', loadChildren: './kanbagis/kanbagis.module#KanbagisPageModule' },
  { path: 'kanbagislist', loadChildren: './kanbagislist/kanbagislist.module#KanbagislistPageModule' },  { path: 'lisanslar', loadChildren: './lisanslar/lisanslar.module#LisanslarPageModule' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
