import { SysPermission } from "../../../../lib/enum/sys-permission";
import { UmaMusumeTrpgPermission } from "../../../../lib/enum/uma-musume-trpg-permission";
import { BaseEditItemModel } from "../../../../lib/models/edit/base-edit-item";

export interface ItemModel extends BaseEditItemModel {
  loginId: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  password: string;
}
