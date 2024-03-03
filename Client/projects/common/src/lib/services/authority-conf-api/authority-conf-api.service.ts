import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PermissionResponse} from '../../models/public-model';
import {BaseApiService} from '../public-service';

@Injectable()
export class AuthorityConfApiService extends BaseApiService {

  isSysPermissionToAdmin(): Observable<PermissionResponse> {
    return this.getHttp().get<PermissionResponse>(this.getApiUrl().authUrls.isSysPermissionToAdmin, {headers: this.getHeader()});
  }

  isUmaMusumeGmPlayer(): Observable<PermissionResponse> {
    return this.getHttp().get<PermissionResponse>(this.getApiUrl().authUrls.isUmaMusumeGmPlayer, {headers: this.getHeader()});
  }

  isUmaMusumePlayer(): Observable<PermissionResponse> {
    return this.getHttp().get<PermissionResponse>(this.getApiUrl().authUrls.isUmaMusumePlayer, {headers: this.getHeader()});
  }

}
