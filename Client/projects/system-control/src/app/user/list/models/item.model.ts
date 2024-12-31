import {BaseListItem, SysPermission, UmaMusumeTrpgPermission} from 'Common';

export interface Item extends BaseListItem {
  loginId: string;
  name: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  creationThreadCount: number;
  totalResCount: number;
  creationTime: Date;
  updateTime: Date;
  deletingTime: Date | null;
  isDeleted: boolean;
}
