import {BaseListResponse} from 'Common';
import {Item} from './item.model';
import {SearchItem} from './search-item.model';

export interface Response extends BaseListResponse {
  search: SearchItem;
  items: Item[];
}
