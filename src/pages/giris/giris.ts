import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KampanyalarPage } from '../kampanyalar/kampanyalar';
import { LoginPage } from '../login/login';

/**
 * Generated class for the GirisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-giris',
  templateUrl: 'giris.html',
})
export class GirisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GirisPage');
  }
  goto_kampanayalar() {
    this.navCtrl.push(KampanyalarPage)
  }
  goto_login_page() {
    this.navCtrl.push(LoginPage)
  }
}
