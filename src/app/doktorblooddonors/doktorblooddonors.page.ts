import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavParams } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { kanBagisi } from 'src/models/Kan-Bagisi/kanbagis';
import firebase from '@firebase/app';
import { take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-doktorblooddonors',
  templateUrl: './doktorblooddonors.page.html',
  styleUrls: ['./doktorblooddonors.page.scss'],
})
export class DoktorblooddonorsPage implements OnInit {
  kanbagislistRef$: AngularFireList<kanBagisi>;
  kanbagislistAsync$: any;
  constructor(public actionSheetController: ActionSheetController, public dataBase: AngularFireDatabase) {
    this.kanbagislistRef$ = this.dataBase.list('kanbagislist');
    this.kanbagislistAsync$ = this.kanbagislistRef$.snapshotChanges();
  }

  async selectkanbagis(kanbagisi: kanBagisi) {


    const actionSheet = await this.actionSheetController.create({

      header: 'Menü',
      buttons: [{
        text: 'Sil',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.kanbagislistRef$.remove((<any>kanbagisi).key);
          //remove kısmı
        }
      }, {
        text: 'İptal',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('İptal edildi');
        }//iptal kısmı
      }
      ]
    });
    await actionSheet.present();


  }

  ngOnInit() {
  }

}