import {BaseListResponse} from 'Common';
import {Item, nameListItem} from './item.model';
import {SearchItem} from './search-item.model';

export interface Response extends BaseListResponse {
  search: SearchItem;
  items: Item[];
}

export interface NameListResponse {
  items: nameListItem[];
}
