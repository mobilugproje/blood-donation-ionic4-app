import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  items;
  constructor(public navCtrl: NavController) {

    this.initializeItems();

  }

  initializeItems() {

    this.items = [
      ' 18-68 Yaş arasında, ağırlığı en az 50 kg ve üzerinde olan her sağlıklı birey kan bağışında bulunabilir.',
      'Kan bağışının gerçekleşmesi için bağışçı 19 yaşından gün almış olmalı ve 68 yaşını geçmemiş olmalıdır.',
      'Kan bağışlayabilmeniz için ağırlığınızın en az 50 kg olması gerekir.',
      'Kan testleri tarafımızdan yapılmamaktadır',
      'Hepatit A ve Hepatit E enfeksiyonu geçirenler tedavi sürecini tamamladıktan sonra 12 ay boyunca kan bağışında bulunamaz.Hepatit B ve C geçirenler ise tedavilerini tamamlamış olsalar dahi hiçbir zaman kan bağışında bulunamazlar.',
      'Bağışlarınızı Kan listesi menüsünden size en uygun bağışçıyı ya ulaşarak isteyebilirsiniz.',
      'Uygulama,lisanslar menüsünde ki yazılımcılara aittir.',

    ];
  }

  getItems(ev) {
    // butun itemleri verir
    this.initializeItems();

    // bulunan değişkeni val değişkenine atar.
    var val = ev.target.value;

    // bulunan item  boş ise hiçbirşey göstermez
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}
