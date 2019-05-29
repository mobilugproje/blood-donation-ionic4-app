import { Component, OnInit } from '@angular/core';
import { ActionSheetController,NavParams } from '@ionic/angular';
import { AngularFireDatabase ,AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { subeBilgi } from '../../models/subeinfo';
import firebase from '@firebase/app';
import { take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-subeler',
  templateUrl: './subeler.page.html',
  styleUrls: ['./subeler.page.scss'],
})
export class SubelerPage implements OnInit {

  subebilgiRef$: AngularFireList<subeBilgi>;
  subebilgiAsync$: any;

  constructor(public actionSheetController: ActionSheetController, public dataBase: AngularFireDatabase) {
     this.subebilgiRef$ = this.dataBase.list('subebilgi');
     this.subebilgiAsync$ = this.subebilgiRef$.snapshotChanges();
    }

    async selectsube(SubeBilgi: subeBilgi){
      const actionSheet = await this.actionSheetController.create({

        header: 'Menü',
        buttons: [{
          text: 'Sil',
          role: 'destructive',
          icon: 'trash',
          handler: () => { this.subebilgiRef$.remove((<any>SubeBilgi).key);
          }
        }, {
          text: 'İptal',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('İptal edildi');
          }
        }
      ]
      });
      await actionSheet.present();
  
    }
  
   ngOnInit() {
   }
  
  }