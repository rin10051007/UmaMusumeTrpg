import {BaseListItem, SysPermission, UmaMusumeTrpgPermission} from 'Common';

export interface Item extends BaseListItem {
  loginId: string;
  name: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  creationThreadCount: number;
  totalResCount: number;
  createTime: Date;
  updateTime: Date;
  deleteTime: Date | null;
  isDeleted: boolean;
}
