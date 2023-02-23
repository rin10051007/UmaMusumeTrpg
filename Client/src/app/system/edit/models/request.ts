import { BaseEditRequestModel } from "../../../../lib/models/edit/base-edit-request";
import { ItemModel } from "./item";

export interface RequestModel extends BaseEditRequestModel {
  edit: ItemModel;
}
