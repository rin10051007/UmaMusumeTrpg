import {BaseListRequest, SearchItem, SearchItemForThread, SearchItemForUser} from "../../public-model";


export interface Request extends BaseListRequest {
  search: SearchItem;
}

export interface RequestForThread extends Request {
  search: SearchItemForThread;
}

export interface RequestForUser extends Request {
  search: SearchItemForUser;
}
