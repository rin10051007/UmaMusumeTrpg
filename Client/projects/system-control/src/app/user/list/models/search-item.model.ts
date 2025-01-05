import {BaseListSearch, SysPermission, UserSortItem, UmaMusumeTrpgPermission} from 'Common';

export interface SearchItem extends BaseListSearch {
  integration: string;
  loginId: string;
  name: string;
  email: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  isUndeleted: boolean;
  isDeleted: boolean;
  creationTimeBeginning: Date | null;
  creationTimeEnd: Date | null;
  updateTimeBeginning: Date | null;
  updateTimeEnd: Date | null;
  deletingTimeBeginning: Date | null;
  deletingTimeEnd: Date | null;
  sortItem: UserSortItem;
}
