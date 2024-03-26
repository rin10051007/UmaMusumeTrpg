import {Data} from '@angular/router';
import {BaseDetailItem, SysPermission, UmaMusumeTrpgPermission} from 'Common';

export interface Item extends BaseDetailItem {
  id: number;
  loginId: string;
  name: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  createTime: Date;
  deleteTime: Data | null;
  isDeleted: boolean;
}
