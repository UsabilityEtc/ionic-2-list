import {Modal, NavController, Page, ViewController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/add-item/add-item.html'
})
export class AddItemPage {

  private viewController: ViewController
  title: string
  description: string

  constructor(viewController: ViewController) {
    this.viewController = viewController
    this.title = 'Untitled'
    this.description = 'No description'
  }

  dismiss() {
    this.viewController.dismiss()
  }

  saveItem() {
    let newItem = {
      title: this.title,
      description: this.description
    };
    this.viewController.getNavParams().get('listItemsPage').saveItem(newItem)
    this.viewController.dismiss()
  }
}
