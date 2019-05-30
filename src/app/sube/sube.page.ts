import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, NavParams, ToastController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import firebase from '@firebase/app';
import { subeBilgi } from '../../models/subeinfo';
import { delay } from 'q';
@Component({
  selector: 'app-sube',
  templateUrl: './sube.page.html',
  styleUrls: ['./sube.page.scss'],
})
export class SubePage implements OnInit {
  SubeBilgi = {} as subeBilgi
  SubeBilgiRef$: AngularFireList<any>;
  constructor(public navCtrl: NavController, public dataBase: AngularFireDatabase, private toast: ToastController, ) {
    this.SubeBilgiRef$ = this.dataBase.list('subebilgi');
  }
  async ekle(subeBilgi: subeBilgi) {

    const toast = await this.toast.create({
      message: 'Şube kaydınız başarılı bir şekilde eklenmiştir!',
      duration: 2000,
      showCloseButton: true,
      position: 'top',
      color: "light"
    }); toast.present();

    this.SubeBilgiRef$.push({

      isim: this.SubeBilgi.isim,
      gsm: this.SubeBilgi.gsm,
      sube: this.SubeBilgi.sube,
      adres: this.SubeBilgi.adres,
    });
    this.SubeBilgi = {} as subeBilgi;
    await delay(2000);
    
    location.href = ('/doctor');

  }
  ngOnInit() {
  }
}
