import {BaseDetailItem, ItemForThread,} from "Common";

export interface Item extends BaseDetailItem {
  creatingUserId: number;
  creatingUserName: string;
  title: string;
  resCount: number;
  isActive: boolean;
  responses: ItemForThread[];
}
