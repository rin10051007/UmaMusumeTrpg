import { BaseDetailResponseModel } from "../../../../lib/models/detail/base-detail-response";
import { ItemModel } from "./item";

export interface ResponseModel extends BaseDetailResponseModel {
  detail: ItemModel
}
