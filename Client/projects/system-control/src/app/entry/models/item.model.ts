import { BaseEntryItem, SysPermission, UmaMusumeTrpgPermission } from "../../../../../../dist/common";

export interface Item extends BaseEntryItem {
  loginId: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  password: string;
}
