import { BaseRequestModel } from "src/lib/interface/base-request";
import { SearchModel } from "./search";

export interface IRequestModel extends BaseRequestModel {
  search: SearchModel;
}
