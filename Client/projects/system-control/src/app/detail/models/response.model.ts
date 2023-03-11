import { BaseDetailItem } from "../../../../../../dist/common";
import { Item } from "./item.model";

export interface Response extends BaseDetailItem {
  detail: Item;
}
