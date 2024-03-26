import {Pipe, PipeTransform} from '@angular/core';
import {SysPermission} from '../../enums/public-enum';

@Pipe({
  name: 'sysPermission',
  standalone: true
})
export class SysPermissionPipe implements PipeTransform {

  transform(sysPermission: SysPermission): string {
    switch (sysPermission) {
      case SysPermission.None:
        return '----';
      case SysPermission.NoQualification:
        return '権限無し';
      case SysPermission.SysAdmin:
        return 'SYS管理権限';
      default:
        return '';
    }
  }
}
