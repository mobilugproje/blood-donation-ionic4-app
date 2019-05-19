import { Component } from '@angular/core';
import { Profile } from '../../models/profile';
import { take } from 'rxjs/operators';
import { NavController, AlertController, NavParams, ToastController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  profileData: Observable<any>

  constructor(private toast: ToastController, private fireAuth: AngularFireAuth, public navCtrl: NavController, private dataBase: AngularFireDatabase) { }
  async ionViewWillEnter() {
    this.fireAuth.authState.pipe(take(1)).subscribe(async data => {
      if (data && data.email && data.uid) {

        const toast = await this.toast.create({
          message: 'Kan Bağışı Uygulamamıza Hoşgeldiniz!',
          duration: 2000,
          showCloseButton: true,
          position: 'top',
          closeButtonText: 'Tamam',
          color: "light"
        }); toast.present();
        this.profileData = this.dataBase.object(`profile/${data.uid}`).valueChanges();
      }
      else {
        const toast = await this.toast.create({
          message: 'Kan ...... Uygulamamıza Hoşgeldiniz!',
          position: 'bottom',
          duration: 3000
        }); toast.present();

      }
    })
  }

  yenile() {
    window.location.reload();
  }

  cikis() {
    this.navCtrl.navigateRoot('/giris');
  }
}
