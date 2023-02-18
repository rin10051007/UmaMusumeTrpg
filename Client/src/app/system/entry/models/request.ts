import { BaseEntryRequestModel } from "../../../../lib/models/entry/base-entry-request";
import { ItemModel } from "./item";

export interface RequestModel extends BaseEntryRequestModel {
  entry: ItemModel
}
