import { BaseListRequest } from "common";
import { Search } from "./search.model";

export interface Request extends BaseListRequest {
  Search: Search;
}
