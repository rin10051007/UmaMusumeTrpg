import { BaseListItem, SysPermission, UmaMusumeTrpgPermission } from "../../../../../../dist/common";

export interface Item extends BaseListItem {
  name: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
}
