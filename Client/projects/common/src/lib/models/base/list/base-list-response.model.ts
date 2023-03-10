import { BaseListItem, BaseListSerch } from "../../public-model";

export interface BaseListResponse {
  search: BaseListSerch;
  items: BaseListItem[];
  totalCount: number;
}
