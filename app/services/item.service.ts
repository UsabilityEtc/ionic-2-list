import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {Http} from '@angular/http';
import {Item} from '../item'


@Injectable()
export class ItemService {

  items: Observable<Item[]>

  constructor(http: Http) {
    this.items = http
      .get('items.json') // located at the root of the www folder
      .map(res => res.json())
  }

  getItems() {
    return this.items
  }
}
