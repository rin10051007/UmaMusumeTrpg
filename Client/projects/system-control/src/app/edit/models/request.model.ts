import {BaseEditRequest} from 'Common';
import {Item} from './item.model';

export interface Request extends BaseEditRequest {
  edit: Item;
}
