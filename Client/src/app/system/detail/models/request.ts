import { BaseDetailRequestModel } from "../../../../lib/models/detail/base-detail-request";
import { SearchModel } from "./search";

export interface RequestModel extends BaseDetailRequestModel {
  search: SearchModel
}
