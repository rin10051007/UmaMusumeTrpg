import { BaseEntryRequest } from "../../../../../common/src/public-lib";
import { Item } from "./item.model";

export interface Request extends BaseEntryRequest {
  entry: Item;
}
