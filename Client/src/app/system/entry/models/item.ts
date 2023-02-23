import { SysPermission } from "../../../../lib/enum/sys-permission";
import { UmaMusumeTrpgPermission } from "../../../../lib/enum/uma-musume-trpg-permission";
import { BaseEntryItemModel } from "../../../../lib/models/entry/base-entry-item";

export interface ItemModel extends BaseEntryItemModel {
  loginId: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  password: string;
}
