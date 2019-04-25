import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
import { ShareService } from '../../services/share';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public paylasim: ShareService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
  }

  data: Observable<any>;
  result: any = [];
  username: any;
  password: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login_action() {
    var url = 'http://localhost/slimapp/public/api/customer/login';
    let postData = new FormData();
    postData.append('username', this.username);
    postData.append('password', this.password);
    this.data = this.http.post(url, postData);
    this.data.subscribe(value => {
      this.result = value
      console.log("LOGİN-PAGE >>>> " + this.result)
      console.log("LOGİN-PAGE >>>> " + this.result.musteri_id)
      if (this.result != false) {
        this.paylasim.setUserID(this.result.musteri_id);

        let login_message = "Hoş Geldiniz, " + this.result.adi;
        let toast = this.toastCtrl.create({
          message: login_message,
          duration: 1500,
          position: 'bottom',

        });

        setTimeout(() => this.navCtrl.setRoot(TabsPage), 500)
        //this.navCtrl.setRoot(TabsPage);
        toast.present();

      }
      else {
        console.log("LOGİN-PAGE >>>> internet yok")
      }
    })

  }
  ionNavWillChange() {
    console.log("nav değişti")
  }
}
