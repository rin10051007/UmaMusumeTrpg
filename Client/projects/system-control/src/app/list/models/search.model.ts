import { BaseListSearch, SysPermission, SystemSortItem, UmaMusumeTrpgPermission } from 'Common';

export interface Search extends BaseListSearch {
  Name: string;
  SysPermission: SysPermission;
  UmaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  SortItem: SystemSortItem;
}
