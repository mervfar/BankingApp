import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ShareService } from '../../services/share';
import { MaxLengthValidator } from '@angular/forms';




@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  column_user: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public http: HttpClient,
    public paylasim: ShareService) {
  }
  data: Observable<any>;
  result: any = [];
  logged_user_id: any;


  ionViewCanEnter() {
    console.log("Can enter " + this.paylasim.getUserID());
  }


  ionViewWillEnter() {
    console.log('ionViewWillEnter HistoryPage');
    console.log(this.paylasim.getUserID())
    this.logged_user_id = this.paylasim.getUserID();
    var url = 'http://localhost/slimapp/public/api/customer/history';
    let postData = new FormData();

    postData.append('musteri_id', this.logged_user_id);
    this.data = this.http.post(url, postData);
    this.data.subscribe(value => {
      this.result = value
      console.log(this.result)


    })
  }
}
