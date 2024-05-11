import {BaseListItem, SysPermission, UmaMusumeTrpgPermission} from 'Common';

export interface Item extends BaseListItem {
  loginId: string;
  name: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  createTime: Date;
  updateTime: Date;
  deleteTime: Date | null;
  isDelete: boolean;
}
