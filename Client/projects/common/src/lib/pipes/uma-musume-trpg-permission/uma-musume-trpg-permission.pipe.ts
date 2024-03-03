import {Pipe, PipeTransform} from '@angular/core';
import {UmaMusumeTrpgPermission} from '../../enums/public-enum';

@Pipe({
  name: 'umaMusumeTrpgPermission',
  standalone: true
})
export class UmaMusumeTrpgPermissionPipe implements PipeTransform {

  transform(umaMusumeTrpgPermission: UmaMusumeTrpgPermission): string {
    switch (umaMusumeTrpgPermission) {
      case UmaMusumeTrpgPermission.None:
        return '----';
      case UmaMusumeTrpgPermission.NoQualification:
        return '権限無し';
      case UmaMusumeTrpgPermission.Player:
        return 'プレイヤー';
      case UmaMusumeTrpgPermission.GmPlayer:
        return 'GMプレイヤー';
      default:
        return '';
    }
  }
}
