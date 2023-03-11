import { BaseListResponse } from "../../../../../../dist/common";
import { Item } from "./item.model";
import { Search } from "./search.model";

export interface Response extends BaseListResponse {
  search: Search;
  items: Item[];
}
