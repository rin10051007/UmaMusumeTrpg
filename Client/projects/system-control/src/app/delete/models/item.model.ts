import {Data} from "@angular/router";
import {BaseDeleteItem, SysPermission, UmaMusumeTrpgPermission} from 'Common';


export interface Item extends BaseDeleteItem {
  loginId: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  createTime: Date;
  deleteTime: Data | null;
  isDeleted: boolean;
}
