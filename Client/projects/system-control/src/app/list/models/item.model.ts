import {BaseListItem, SysPermission, UmaMusumeTrpgPermission} from 'Common';

export interface Item extends BaseListItem {
  name: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
}
