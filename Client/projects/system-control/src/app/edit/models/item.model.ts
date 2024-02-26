import { BaseEditItem, SysPermission, UmaMusumeTrpgPermission } from 'Common';

export interface Item extends BaseEditItem {
  loginId: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  password: string;
}
