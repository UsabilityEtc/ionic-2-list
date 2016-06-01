import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {ItemListPage} from './pages/item-list/item-list';
import {ItemService} from './services/item.service'


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [ItemService],
  config: { // http://ionicframework.com/docs/v2/api/config/Config/
    platforms: {
      ios: {
        statusbarPadding: true
      }
    }
  }
})
export class MyApp {
  rootPage: any = ItemListPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
