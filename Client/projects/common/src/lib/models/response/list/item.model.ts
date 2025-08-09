import {BaseListItem} from "../../public-model";


export interface Item extends BaseListItem {
  threadResNo: number;
  content: string;
  creatingTime: Date;
}

export interface ItemForThread extends Item {
  creatingUserId: number;
  creatingUserName: string;
}

export interface ItemForUser extends Item {
  threadId: number;
  threadTitle: string;
}
