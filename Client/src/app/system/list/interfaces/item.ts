import { SysPermission } from "src/lib/enum/sys-permission";
import { UmaMusumeTrpgPermission } from "src/lib/enum/uma-musume-trpg-permission";
import { BaseItemModel } from "src/lib/interface/base-item";

export interface ItemModel extends BaseItemModel {
  name: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
}
