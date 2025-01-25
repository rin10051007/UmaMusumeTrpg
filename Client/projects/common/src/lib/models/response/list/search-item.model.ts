import {ResponseSortItem} from "../../../enums/public-enum";
import {BaseListSearch} from "../../public-model";

export interface SearchItem extends BaseListSearch {
  content: string;
  creatingTimeBeginning: Date | null;
  creatingTimeEnd: Date | null;
  sortItem: ResponseSortItem;
  responseGetInterval: number;
}

export interface SearchItemForThread extends SearchItem {
  threadId: number;
  threadResNoBeginning: number;
  threadResNoEnd: number;
}

export interface SearchItemForUser extends SearchItem {
  creatingUserId: number;
}
