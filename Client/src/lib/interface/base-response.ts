import { BaseItemModel } from "./base-item";
import { BaseSearchModel } from "./base-search";

export interface BaseResponseModel {
  search: BaseSearchModel;
  items: BaseItemModel[];
  totalCount: number;
}
