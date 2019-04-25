import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ShareService } from '../../services/share';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public paylasim: ShareService,
    public http: HttpClient) {
  }
  data: Observable<any>;
  result: any = [];
  logged_user_id: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ionViewCanEnter() {
    console.log("Can enter " + this.paylasim.getUserID());
  }


  ionViewWillEnter() {
    console.log('ionViewWillEnter profilPage');
    console.log(this.paylasim.getUserID())
    this.logged_user_id = this.paylasim.getUserID();
    var url = 'http://localhost/slimapp/public/api/customer/' + this.logged_user_id;


    console.log(url)
    this.data = this.http.get(url);
    this.data.subscribe(value => {
      this.result = value
      console.log(this.result)

    })
  }

}
