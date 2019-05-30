import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { subeBilgi } from '../../models/subeinfo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subegoruntule',
  templateUrl: './subegoruntule.page.html',
  styleUrls: ['./subegoruntule.page.scss'],
})
export class SubegoruntulePage implements OnInit {

  subeBilgiRef$: Observable<any[]>;

  constructor(public navCtrl: NavController, public dataBase: AngularFireDatabase) {
    this.subeBilgiRef$ = this.dataBase.list('subebilgi').valueChanges();   
  }
  ngOnInit() {
  }

}


