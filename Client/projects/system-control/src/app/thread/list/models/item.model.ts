import {BaseListItem} from 'Common';

export interface Item extends BaseListItem {
  title: string;
  creatingUserId: number;
  creatingUserName: string;
  resCount: number;
  creatingTime: Date;
  updatingTime: Date;
  deletingTime: Date | null;
  isDeleted: boolean;
}

export interface nameListItem {
  id: number;
  name: string;
}
