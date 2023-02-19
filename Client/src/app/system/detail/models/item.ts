import { Data } from "@angular/router";
import { SysPermission } from "../../../../lib/enum/sys-permission";
import { UmaMusumeTrpgPermission } from "../../../../lib/enum/uma-musume-trpg-permission";
import { BaseDetailItemModel } from "../../../../lib/models/detail/base-detail-item";

export interface ItemModel extends BaseDetailItemModel {
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  createTime: Date;
  deleteTime: Data;
  isDeleted: boolean;
}
