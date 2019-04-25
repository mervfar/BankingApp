import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { ShareService } from '../../services/share';


@IonicPage()
@Component({
  selector: 'page-eft',
  templateUrl: 'eft.html',
})
export class EftPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private db: Storage,
    public paylasim: ShareService,
    public toastCtrl: ToastController) {
  }
  data: Observable<any>;
  users: any = [];
  logged_user_id: any;
  deneme: any;
  selected: any;
  money: any;
  status: boolean = true;
  onay: boolean;


  ionViewDidEnter() {

    console.log("Wiew Did Enter  " + this.logged_user_id);



  }

  ionViewCanEnter() {
    console.log("Can enter " + this.paylasim.getUserID());
  }

  ionViewWillEnter() {
    console.log("girerken " + this.paylasim.getUserID());
    this.logged_user_id = this.paylasim.getUserID();
    var url = 'http://localhost/slimapp/public/api/customer/transactions';
    let postData = new FormData();
    console.log("from datasıından önce logged id " + this.logged_user_id);
    postData.append('musteri_id', this.paylasim.getUserID());
    this.data = this.http.post(url, postData);
    this.data.subscribe(value => {
      this.users = value
      console.log(this.users)
      console.log("en içerdeki " + this.paylasim.getUserID());

    });

  }
  get_confirm() {

    console.log(this.selected + " " + this.money);
    this.status = false;
    console.log(this.onay)
  }
  send_action() {
    let login_message = "Gönderim Başarılı";
    let toast = this.toastCtrl.create({
      message: login_message,
      duration: 1500,
      position: 'bottom',
    });
    var url = 'http://localhost/slimapp/public/api/customer/eft';
    let postData = new FormData();
    postData.append('sender_id', this.logged_user_id);
    postData.append('receiver_ac_no', this.selected);
    postData.append('money', this.money);
    this.data = this.http.post(url, postData);
    this.data.subscribe(value => {

      toast.present();
      this.status = true;

      console.log(value)
    });
  }

}
