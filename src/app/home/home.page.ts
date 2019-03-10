import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor( public navCtrl:NavController) { }


  cikis(){
    this.navCtrl.navigateRoot('/giris');
    window.location.reload();
  }
}
