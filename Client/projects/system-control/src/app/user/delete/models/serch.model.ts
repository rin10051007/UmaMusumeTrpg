import {BaseDeleteItem, SysPermission, UmaMusumeTrpgPermission} from 'Common';


export interface Item extends BaseDeleteItem {
  loginId: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermossion: UmaMusumeTrpgPermission;
  email: string;
  createTime: Date;
  deleteTime?: Date;
  isDeleted: boolean;
}
