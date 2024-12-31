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
  creationTimeStart: Date | null;
  creationTimeEnd: Date | null;
  updateTimeStart: Date | null;
  updateTimeEnd: Date | null;
  deletingTimeStart: Date | null;
  deletingTimeEnd: Date | null;
  sortItem: SystemSortItem;
}
