import {SortDirection} from '../../../enums/public-enum';

export interface BaseListSearch {
  sortDirection: SortDirection;
  displayPage: number;
  displayCount: number;
}
