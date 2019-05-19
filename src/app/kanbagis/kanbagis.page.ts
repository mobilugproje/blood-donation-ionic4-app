import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, NavParams, ToastController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import firebase from '@firebase/app';
import { kanBagisi } from '../../models/kan-bagisi/kanbagis';
import { delay } from 'q';
@Component({
  selector: 'app-kanbagis',
  templateUrl: './kanbagis.page.html',
  styleUrls: ['./kanbagis.page.scss'],
})
export class KanbagisPage implements OnInit {
  KanBagisi= {} as kanBagisi
  KanBagisiRef$: AngularFireList<any>;
  constructor(public navCtrl: NavController, public dataBase: AngularFireDatabase,private toast:ToastController,) { 
    this.KanBagisiRef$ = this.dataBase.list('kanbagislist');
   
  }
  async bagisla(kanBagisi: kanBagisi){

    const toast = await this.toast.create({
      message: 'Bağışınız başarıyla alınmıştır en kısa sürede tarafımızdan aranacaksınız.Teşekür ederiz',
      duration: 2000,
      showCloseButton: true,
      position: 'top',
      color: "light"
           }); toast.present(); 
    
         
  this.KanBagisiRef$.push({
        
    isim: this.KanBagisi.isim,
    gsm: Number(this.KanBagisi.gsm),
    konum: this.KanBagisi.konum,
    kgrub: this.KanBagisi.kgrub,
  }); //bu this.kanbagisis vs şey oluyor ekrandaki bilgiler gittikten sonra sıfırlamak için.
  this.KanBagisi= {} as kanBagisi;
 //buraya tuşa basıldıktan sonra gidilecek yeri yapıcaz

 await delay(2500);
 location.href=('/mainmenu');
}
ngOnInit() {
}

}

