import {BaseDeleteItem, SysPermission, UmaMusumeTrpgPermission} from 'Common';


export interface Item extends BaseDeleteItem {
  loginId: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  creatingTime: Date;
  deletingTime: Date | null;
  isDeleted: boolean;
}
