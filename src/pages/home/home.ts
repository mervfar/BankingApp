import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { ShareService } from '../../services/share';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';
import { GirisPage } from '../giris/giris';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  logged_user_id: any;
  data: Observable<any>;
  result: any = [];


  constructor(public navCtrl: NavController,
    public paylasim: ShareService,
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public app: App,
    public toastCtrl: ToastController) {

  }
  ionViewDidEnter() {

    console.log("Wiew Did Enter  " + this.logged_user_id);



  }

  ionViewCanEnter() {
    console.log("HOME-PAGE >>>> Can enter " + this.paylasim.getUserID());
    this.logged_user_id = this.paylasim.getUserID();
    const loader = this.loadingCtrl.create({
      content: "Yükleniyor...",
      duration: 500
    });
    loader.present();
  }




  ionViewWillEnter() {
    console.log('ionViewDidEnter homepage');
    this.logged_user_id = this.paylasim.getUserID();
    console.log("HOME-PAGE >>>> callback " + this.logged_user_id)
    var url = 'http://localhost/slimapp/public/api/customer/' + this.logged_user_id;
    this.data = this.http.get(url);
    this.data.subscribe(value => {
      this.result = value
      console.log(this.result)
    });
  }

  logout_action() {

    this.app.getRootNav().setRoot(GirisPage);
    this.paylasim.clear();
    let login_message = "Güle Güle , " + this.result.adi;
    let toast = this.toastCtrl.create({
      message: login_message,
      duration: 1500,
      position: 'bottom',
      cssClass: "toast-css"

    });
    toast.present();

  }


}