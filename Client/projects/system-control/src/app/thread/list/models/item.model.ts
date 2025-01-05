import {BaseListItem} from 'Common';

export interface Item extends BaseListItem {
  title: string;
  creationUserId: number;
  creationUserName: string;
  resCount: number;
  creationTime: Date;
  updateTime: Date;
  deletingTime: Date | null;
  isDeleted: boolean;
}
