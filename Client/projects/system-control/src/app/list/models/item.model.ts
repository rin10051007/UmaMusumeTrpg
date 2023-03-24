import { BaseListItem, SysPermission, UmaMusumeTrpgPermission } from "common";

export interface Item extends BaseListItem {
  name: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
}
