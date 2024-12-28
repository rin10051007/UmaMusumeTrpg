import {BaseEditItem, SysPermission, UmaMusumeTrpgPermission} from 'Common';

export interface Item extends BaseEditItem {
  loginId: string;
  name: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  password: string;
}
