import {BaseListItem, BaseListSearch} from '../../public-model';

export interface BaseListResponse {
  search: BaseListSearch;
  items: BaseListItem[];
  totalCount: number;
}
