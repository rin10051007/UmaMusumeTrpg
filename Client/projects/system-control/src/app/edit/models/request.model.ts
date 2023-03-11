import { BaseEditRequest } from "../../../../../common/src/public-lib";
import { Item } from "./item.model";

export interface Request extends BaseEditRequest {
  edit: Item;
}
