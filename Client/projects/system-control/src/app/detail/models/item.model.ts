import { Data } from "@angular/router";
import { BaseDetailItem, SysPermission, UmaMusumeTrpgPermission } from "common";

export interface Item extends BaseDetailItem {
  loginId: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  createTime: Date;
  deleteTime: Data;
  isDeleted: boolean;
}
