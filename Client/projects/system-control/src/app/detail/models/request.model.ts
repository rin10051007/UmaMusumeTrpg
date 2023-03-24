import { BaseDetailRequest } from "common";
import { Search } from "./search.model";

export interface Request extends BaseDetailRequest {
  search: Search
}
