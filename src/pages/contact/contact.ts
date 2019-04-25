import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ShareService } from '../../services/share';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
    public paylasim: ShareService,
    public http: HttpClient) {

  }
  body: any;
  header: any;
  logged_user_id: any;
  data: Observable<any>;
  result: any = [];
  ionViewCanEnter() {
    console.log("Can enter " + this.paylasim.getUserID());

  }

  post_action() {

    console.log(this.paylasim.getUserID())


    this.logged_user_id = this.paylasim.getUserID();
    var url = 'http://localhost/slimapp/public/api/customer/post/sikayet';
    let postData = new FormData();

    postData.append('who', this.logged_user_id);
    postData.append('header', this.header);
    postData.append('body', this.body);
    this.data = this.http.post(url, postData);
    this.data.subscribe(value => {
      this.result = value
      console.log(this.result)
    })


  }
}
