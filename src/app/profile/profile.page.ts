import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { take } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Profile } from '../../models/profile';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile= {} as Profile;
  
  constructor(private fireAuth: AngularFireAuth, private dataBase:AngularFireDatabase, public navCtrl:NavController) { }

  save(){
    this.fireAuth.authState.pipe(take(1)).subscribe(auth => {
      this.dataBase.object(`profile/${auth.uid}`).set(this.profile)
              .then(() => this.navCtrl.navigateRoot('/home'));
    })
      
    }
  ngOnInit() {
  }

}
