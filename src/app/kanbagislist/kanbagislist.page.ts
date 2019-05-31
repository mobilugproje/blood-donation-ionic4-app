import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { kanBagisi } from '../../models/kan-bagisi/kanbagis';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kanbagislist',
  templateUrl: './kanbagislist.page.html',
  styleUrls: ['./kanbagislist.page.scss'],
})
export class KanbagislistPage implements OnInit {

  kanbagislistRef$: Observable<any[]>;

  constructor(public navCtrl: NavController, public dataBase: AngularFireDatabase) {
    this.kanbagislistRef$ = this.dataBase.list('kanbagislist').valueChanges();

  }

  ngOnInit() {
  }

}
