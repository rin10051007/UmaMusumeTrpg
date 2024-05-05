import {BaseListRequest} from 'Common';
import {SearchItem} from './search-item.model';

export interface Request extends BaseListRequest {
  Search: SearchItem;
}
