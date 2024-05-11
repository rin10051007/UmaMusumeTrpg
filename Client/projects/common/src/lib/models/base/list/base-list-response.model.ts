import {HttpStatusCode} from "@angular/common/http";
import {BaseListItem, BaseListSearch} from '../../public-model';

export interface BaseListResponse {
  search: BaseListSearch;
  items: BaseListItem[];
  length: number;
  httpStatusCode: HttpStatusCode;
}
