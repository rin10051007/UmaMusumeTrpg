import {
  BaseListResponse,
  Item,
  ItemForThread,
  SearchItem,
  SearchItemForThread,
  SearchItemForUser
} from "../../public-model";


export interface Response extends BaseListResponse {
  search: SearchItem;
  items: Item[]
}

export interface ResponseForThread extends Response {
  search: SearchItemForThread;
  items: ItemForThread[]
}

export interface ResponseForUser extends Response {
  search: SearchItemForUser;
  items: Item[]
}
