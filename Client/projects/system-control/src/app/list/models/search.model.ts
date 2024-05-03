import {BaseListSearch, SysPermission, SystemSortItem, UmaMusumeTrpgPermission} from 'Common';

export interface Search extends BaseListSearch {
  name: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  sortItem: SystemSortItem;
}
