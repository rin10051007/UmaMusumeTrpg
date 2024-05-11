import {SortDirection} from '../../../enums/public-enum';

export interface BaseListSearch {
  sortDirection: SortDirection;
  pageIndex: number;
  pageSize: number;
}
