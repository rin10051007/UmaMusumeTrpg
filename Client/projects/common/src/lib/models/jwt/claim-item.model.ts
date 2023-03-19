import { SysPermission, UmaMusumeTrpgPermission } from "../../enums/public-enum"

export interface ClaimItem {
  Id: number;
  LoginId: string;
  Name: string;
  aud: string;
  exp: Date;
  iat: Date;
  iss: string;
  nbf: Date;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
}
