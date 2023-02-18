import { BaseListItemModel } from "./base-list-item";
import { BaseListSearchModel } from "./base-list-search";

export interface BaseListResponseModel {
  search: BaseListSearchModel;
  items: BaseListItemModel[];
  totalCount: number;
}
