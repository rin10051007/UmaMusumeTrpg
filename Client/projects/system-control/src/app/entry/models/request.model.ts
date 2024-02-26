import { BaseEntryRequest } from 'Common';
import { Item } from './item.model';

export interface Request extends BaseEntryRequest {
  entry: Item;
}
