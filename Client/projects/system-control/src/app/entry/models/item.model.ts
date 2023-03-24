import { BaseEntryItem, SysPermission, UmaMusumeTrpgPermission } from "common";

export interface Item extends BaseEntryItem {
  loginId: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  password: string;
}
