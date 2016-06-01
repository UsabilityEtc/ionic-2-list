import {Page, Modal, NavController, NavParams} from 'ionic-angular'
import {ItemDetailPage} from '../item-detail/item-detail'
import {AddItemPage} from '../add-item/add-item'
import {ItemService} from '../../services/item.service'
import {Item} from '../../item'


@Page({
  templateUrl: 'build/pages/item-list/item-list.html'
})
export class ItemListPage {

  private nav: NavController
  private navParams: NavParams
  private backingItems: Item[]
  items: Item[]

  constructor(nav: NavController, navParams: NavParams, itemService: ItemService) {
    this.nav = nav
    this.navParams = navParams
    this.items = []
    itemService.getItems().subscribe(data => {
      this.backingItems = data
      this.updateList()
    })
  }

  private updateList() {
    this.filterItemsWithQuery('')
  }

  viewItem(event, item) {
    this.nav.push(ItemDetailPage, { item: item })
  }

  addItem(event) {
    let modal = Modal.create(AddItemPage, { listItemsPage: this });
    this.nav.present(modal);
  }

  saveItem(newItem) {
    this.backingItems.push(newItem)
    this.updateList()
  }

  deleteItem(event, item) {
    let index = this.items.indexOf(item)
    if (index !== -1) {
      this.items.splice(index, 1)
    }
  }

  filterItems(searchBar) {
    this.filterItemsWithQuery(searchBar.value)
  }

  private filterItemsWithQuery(filterQuery) {
    filterQuery = filterQuery.toLowerCase()
    this.items = []
    this.backingItems.forEach( value => {
      let title = value.title.toLowerCase()
      if (title.startsWith(filterQuery)) {
        this.items.push(value)
      }
    })
  }

}
