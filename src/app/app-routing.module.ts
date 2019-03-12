import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'giris', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'giris', loadChildren: './giris/giris.module#GirisPageModule' },
  { path: 'kayit', loadChildren: './kayit/kayit.module#KayitPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
