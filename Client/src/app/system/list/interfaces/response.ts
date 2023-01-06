import { BaseResponseModel } from "src/lib/interface/base-response";
import { ItemModel } from "./item";
import { SearchModel } from "./search";

export interface ResponseModel extends BaseResponseModel {
  search: SearchModel;
  items: ItemModel[];
}
