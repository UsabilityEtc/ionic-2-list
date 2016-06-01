import {Page, NavParams} from 'ionic-angular'


@Page({
  templateUrl: 'build/pages/item-detail/item-detail.html'
})
export class ItemDetailPage {

  title: string
  description: string
  navParams: NavParams

  constructor(navParams: NavParams) {
    this.navParams = navParams
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

}
