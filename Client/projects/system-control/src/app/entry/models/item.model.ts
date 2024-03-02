import { BaseEntryItem, SysPermission, UmaMusumeTrpgPermission } from 'Common';

export interface Item extends BaseEntryItem {
  loginId: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  password: string;
  passwordcfm: string;
}
