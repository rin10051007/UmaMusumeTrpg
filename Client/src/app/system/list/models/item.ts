import { SysPermission } from "../../../../lib/enum/sys-permission";
import { UmaMusumeTrpgPermission } from "../../../../lib/enum/uma-musume-trpg-permission";
import { BaseListItemModel } from "../../../../lib/models/list/base-list-item";

export interface ItemModel extends BaseListItemModel {
  name: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
}
