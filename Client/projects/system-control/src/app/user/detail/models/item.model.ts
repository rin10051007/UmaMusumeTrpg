import {BaseDetailItem, SysPermission, UmaMusumeTrpgPermission} from 'Common';

export interface Item extends BaseDetailItem {
  loginId: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  creationTime: Date;
  deletingTime: Date | null;
  isDeleted: boolean;
}
