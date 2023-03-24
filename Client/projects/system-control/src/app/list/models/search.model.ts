import { BaseListSearch, SysPermission, SystemSortItem, UmaMusumeTrpgPermission } from "common";

export interface Search extends BaseListSearch {
  Name: string;
  SysPermission: SysPermission;
  UmaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  SortItem: SystemSortItem;
}
