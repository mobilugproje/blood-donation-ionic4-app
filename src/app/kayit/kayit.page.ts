import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { SelectorMatcher } from '@angular/compiler';
import { User } from '../../models/user';
import { NavController, AlertController, NavParams ,ToastController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-kayit',
  templateUrl: './kayit.page.html',
  styleUrls: ['./kayit.page.scss'],
})
export class KayitPage implements OnInit {

  user= {} as User;

  constructor(private fireAuth: AngularFireAuth,private toast:ToastController, public navCtrl:NavController) { }
back(){

  this.navCtrl.navigateBack('/giris');
  
}


async kayitol(user: User ){
try{
  const info = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
if(info){
  this.navCtrl.navigateForward('/profile');
}

}
catch(e){
  const toast = await this.toast.create({
    message: 'Tüm alanları doldurunuz! Şifre minimum 6 karakterden oluşmalı!',
    duration: 4000,
    showCloseButton: true,
  position: 'top',
  closeButtonText: 'Tamam',
  color:"light"
  });
  toast.present();
}
}
  ngOnInit() {
  }

}
