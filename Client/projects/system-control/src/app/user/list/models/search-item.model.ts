import {BaseListSearch, SysPermission, SystemSortItem, UmaMusumeTrpgPermission} from 'Common';

export interface SearchItem extends BaseListSearch {
  integration: string;
  loginId: string;
  name: string;
  email: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  isUndeleted: 1 | 0;
  isDeleted: 1 | 0;
  createTimeStart: Date | null;
  createTimeEnd: Date | null;
  updateTimeStart: Date | null;
  updateTimeEnd: Date | null;
  deleteTimeStart: Date | null;
  deleteTimeEnd: Date | null;
  sortItem: SystemSortItem;
}
