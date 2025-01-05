import {BaseDeleteItem, SysPermission, UmaMusumeTrpgPermission} from 'Common';


export interface Item extends BaseDeleteItem {
  loginId: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermossion: UmaMusumeTrpgPermission;
  email: string;
  creatingTime: Date;
  deletingTime?: Date;
  isDeleted: boolean;
}
