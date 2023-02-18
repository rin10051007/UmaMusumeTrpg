import { BaseListRequestModel } from "../../../../lib/models/list/base-list-request";
import { SearchModel } from "./search";

export interface RequestModel extends BaseListRequestModel {
  Search: SearchModel
}
