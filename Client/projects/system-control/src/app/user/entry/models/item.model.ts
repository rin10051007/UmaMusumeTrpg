import {BaseEntryItem, SysPermission, UmaMusumeTrpgPermission} from 'Common';

export interface Item extends BaseEntryItem {
  loginId: string;
  name: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  password: string;
  passwordCfm: string;
}
