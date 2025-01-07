import {BaseDetailItem} from "Common";

export interface Item extends BaseDetailItem {
  creatingUserId:number;
  creationUserName:string;
  title:string;
  resCount:number;
}
