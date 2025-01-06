import {BaseListSearch, ThreadSortItem} from 'Common';

export interface SearchItem extends BaseListSearch {
  creatingUserId: number;
  title: string;
  resCountMin: number;
  resCountMax: number;
  isUndeleted: boolean;
  isDeleted: boolean;
  creatingTimeBeginning: Date | null;
  creatingTimeEnd: Date | null;
  updatingTimeBeginning: Date | null;
  updatingTimeEnd: Date | null;
  deletingTimeBeginning: Date | null;
  deletingTimeEnd: Date | null;
  sortItem: ThreadSortItem
}
