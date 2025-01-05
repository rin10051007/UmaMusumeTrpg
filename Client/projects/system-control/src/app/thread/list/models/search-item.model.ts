import {BaseListSearch, ThreadSortItem} from 'Common';

export interface SearchItem extends BaseListSearch {
  creationUserId: number;
  title: string;
  resCountMin: number;
  resCountMax: number;
  isUndeleted: boolean;
  isDeleted: boolean;
  creationTimeBeginning: Date | null;
  creationTimeEnd: Date | null;
  updateTimeBeginning: Date | null;
  updateTimeEnd: Date | null;
  deletingTimeBeginning: Date | null;
  deletingTimeEnd: Date | null;
  sortItem: ThreadSortItem
}
