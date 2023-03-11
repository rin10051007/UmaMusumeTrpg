import { BaseEditItem } from "../../../../../../dist/common";
import { SysPermission, UmaMusumeTrpgPermission } from "../../../../../common/src/public-lib";

export interface Item extends BaseEditItem {
  loginId: string;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
  email: string;
  password: string;
}
