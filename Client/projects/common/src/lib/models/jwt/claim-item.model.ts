import { SysPermission, UmaMusumeTrpgPermission } from '../../enums/public-enum';

export interface ClaimItem {
  Id: number;
  LoginId: string;
  Name: string;
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  nbf: number;
  sysPermission: SysPermission;
  umaMusumeTrpgPermission: UmaMusumeTrpgPermission;
}
