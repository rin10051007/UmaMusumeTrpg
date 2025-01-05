import {BaseListSearch, SysPermission, UmaMusumeTrpgPermission, UserSortItem} from 'Common';

export interface SearchItem extends BaseListSearch {
  integration: string;
  loginId: string;
  name: string;
  email: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  isUndeleted: boolean;
  isDeleted: boolean;
  creatingTimeBeginning: Date | null;
  creatingTimeEnd: Date | null;
  updatingTimeBeginning: Date | null;
  updatingTimeEnd: Date | null;
  deletingTimeBeginning: Date | null;
  deletingTimeEnd: Date | null;
  sortItem: UserSortItem;
}
