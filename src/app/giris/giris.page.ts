import { Component, OnInit } from '@angular/core';
import { SelectorMatcher } from '@angular/compiler';
import { User } from '../../models/user';
import { NavController, AlertController, NavParams, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home.page';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.page.html',
  styleUrls: ['./giris.page.scss'],
})
export class GirisPage implements OnInit {


  user: Observable<firebase.User>;

  constructor(private fireAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController,
    private gplus: GooglePlus,
    private platform: Platform) {

    this.user = this.fireAuth.authState;
  }
  googleLogintwo() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogintwo();
    } else {
      this.webGoogleLogin();
    }
  }

  async nativeGoogleLogintwo(): Promise<void> {

    const gpluss = await this.gplus.login({

      'webClientId': '206044002242-2nlo0n271mhdat7f848ts6ma2vt900rq.apps.googleusercontent.com',
      'offline': true,
      'scopes': 'profile email'
    })
    return await this.fireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gpluss.idToken)).then(suc => {
      this.navCtrl.navigateRoot('/home');
    }).catch(ns => {
      alert("error")
    })
  }



  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }
  async nativeGoogleLogin(): Promise<void> {
    try {
      const gplusUser = await this.gplus.login({
        'webClientId': '206044002242-2nlo0n271mhdat7f848ts6ma2vt900rq.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })

      return await this.fireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)).then(suc => {
        this.fireAuth.authState.pipe(take(1)).subscribe(async auth => {
          if (!auth.uid) {
            this.navCtrl.navigateRoot('/home');
          }
          else {
            this.navCtrl.navigateRoot('/profile');
          }
        })
      }).catch(ns => {
        alert("error")
      })

    } catch (err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.fireAuth.auth.signInWithPopup(provider);

    } catch (err) {
      console.log(err)
    }

  }

  signOut() {
    this.fireAuth.auth.signOut();
  }

  async giris(user: User) {
    if (user.email == "doktor" && user.password == "doktor") {
      this.navCtrl.navigateRoot('/doctor');
    }
    else {
      try {
        const info = await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        if (info) {
          await this.navCtrl.navigateRoot('/home');
        }

      }
      catch (e) {
        const toast = await this.toast.create({
          message: 'Lütfen şifreyi veya E-posta adresinizi doğru girdiğinizden emin olunuz!',
          duration: 3000,
          showCloseButton: true,
          position: 'top',
          closeButtonText: 'Tamam',
          color: "light"
        });
        toast.present();
      }
    }
  }
  kayit() {

    this.navCtrl.navigateForward('/kayit');

  }

  ngOnInit() {

  }

}



