import { SysPermission } from "../../../../lib/enum/sys-permission";
import { SystemSortItem } from "../../../../lib/enum/system/sort-item";
import { UmaMusumeTrpgPermission } from "../../../../lib/enum/uma-musume-trpg-permission";
import { BaseListSearchModel } from "../../../../lib/models/list/base-list-search";

export interface SearchModel extends BaseListSearchModel {
  Name: string;
  SysPermission: SysPermission;
  UmaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  SortItem: SystemSortItem;
}
