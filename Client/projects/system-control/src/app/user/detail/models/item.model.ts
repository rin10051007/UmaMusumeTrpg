import {BaseDetailItem, SysPermission, UmaMusumeTrpgPermission} from 'Common';

export interface Item extends BaseDetailItem {
  loginId: string;
  name: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  creationThreadCount: number;
  totalResCount: number;
  creationTime: Date;
  deletingTime: Date | null;
  isDeleted: boolean;
}
