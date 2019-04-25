import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { HistoryPage } from '../history/history';
import { EftPage } from '../eft/eft';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = HistoryPage;
  tab2Root = EftPage
  tab3Root = ContactPage;

  tab5Root = ProfilePage;

  constructor() {

  }
}
