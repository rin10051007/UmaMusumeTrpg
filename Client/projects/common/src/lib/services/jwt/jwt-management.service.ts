import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { SysPermission, UmaMusumeTrpgPermission } from '../../enums/public-enum';
import { ClaimItem } from '../../models/public-model';
import { ConveniencesService, LocalStorageService } from '../public-service';

@Injectable()
export class JwtManagementService {

  item: ClaimItem = {
    Id: 0,
    LoginId: '',
    Name: '',
    aud: '',
    exp: 0,
    iat: 0,
    iss: '',
    nbf: 0,
    sysPermission: SysPermission.None,
    umaMusumeTrpgPermission: UmaMusumeTrpgPermission.None
  };

  constructor(private localStorageService: LocalStorageService, private conveniencesService: ConveniencesService) {
    var token = this.localStorageService.getToken();
    if (!this.conveniencesService.isEmpty(token)) {
      var tmp = jwtDecode(token || '') as ClaimItem;
      this.item = {
        Id: Number(tmp.Id),
        LoginId: tmp.LoginId,
        Name: tmp.Name,
        aud: tmp.aud,
        exp: tmp.exp,
        iat: tmp.iat,
        iss: tmp.iss,
        nbf: tmp.nbf,
        sysPermission: SysPermission[tmp.sysPermission],
        umaMusumeTrpgPermission: UmaMusumeTrpgPermission[tmp.umaMusumeTrpgPermission],
      } as unknown as ClaimItem;
    }
  }

  getItem(): ClaimItem {
    return this.item;
  }

  getClaimItem(token: string): ClaimItem {
    var tmp = jwtDecode(token) as ClaimItem;
    return {
      Id: Number(tmp.Id),
      LoginId: tmp.LoginId,
      Name: tmp.Name,
      aud: tmp.aud,
      exp: tmp.exp,
      iat: tmp.iat,
      iss: tmp.iss,
      nbf: tmp.nbf,
      sysPermission: SysPermission[tmp.sysPermission],
      umaMusumeTrpgPermission: UmaMusumeTrpgPermission[tmp.umaMusumeTrpgPermission],
    } as unknown as ClaimItem;
  }
}
