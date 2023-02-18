import { BaseListResponseModel } from "../../../../lib/models/list/base-list-response";
import { ItemModel } from "./item";
import { SearchModel } from "./search";


export interface ResponseModel extends BaseListResponseModel {
  search: SearchModel;
  items: ItemModel[];
}
