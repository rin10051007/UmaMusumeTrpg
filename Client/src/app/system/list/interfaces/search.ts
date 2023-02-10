import { SysPermission } from "src/lib/enum/sys-permission";
import { SystemSortItem } from "src/lib/enum/system/sort-item";
import { UmaMusumeTrpgPermission } from "src/lib/enum/uma-musume-trpg-permission";
import { BaseSearchModel } from "src/lib/interface/base-search";

export interface SearchModel extends BaseSearchModel {
  Name: string;
  SysPermissions: SysPermission;
  UmaMusumeTrpgPermissions: UmaMusumeTrpgPermission;
  SortItem: SystemSortItem;
}
