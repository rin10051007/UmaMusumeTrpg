import { BaseDetailItem } from 'Common';
import { Item } from './item.model';

export interface Response extends BaseDetailItem {
  detail: Item;
}
