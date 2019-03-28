import { Component, OnInit } from '@angular/core';
import { SelectorMatcher } from '@angular/compiler';
import { User } from '../../models/user';
import { NavController, AlertController, NavParams ,ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home.page';
@Component({
  selector: 'app-giris',
  templateUrl: './giris.page.html',
  styleUrls: ['./giris.page.scss'],    
})
export class GirisPage implements OnInit {

user={} as User;


  constructor(private fireAuth: AngularFireAuth,private toast:ToastController, public navCtrl:NavController) { }

  async giris(user: User ){
    try{
      const info = await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    if(info){
     await this.navCtrl.navigateRoot('/home');
    }
    
    }
    catch(e){
      const toast = await this.toast.create({
        message: 'Lütfen şifreyi veya E-posta adresinizi doğru girdiğinizden emin olunuz!',
        duration: 3000,
        showCloseButton: true,
      position: 'top',
      closeButtonText: 'Tamam',
      color:"light"
      });
      toast.present();
    }
    }

 kayit(){
 
 this.navCtrl.navigateForward('/kayit');

 }
 naber(){
 
 this.navCtrl.navigateForward('/kanbagis');
 
  }
  naber2(){
 
    this.navCtrl.navigateForward('/kanbagislist');
    
     }
  ngOnInit() {
           
  }

}



