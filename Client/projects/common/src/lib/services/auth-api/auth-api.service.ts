import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LoginRequest, LoginResponse, LoginUser} from '../../models/public-model';
import {BaseApiService} from '../public-service';

@Injectable()
export class AuthApiService extends BaseApiService {
  logIn(user: LoginUser): Observable<LoginResponse> {
    const request: LoginRequest = {
      loginUser: user
    }
    return this.getHttp().post<LoginResponse>(this.getApiUrl().authUrls.login, request, {headers: this.getHeader()});
  }

  tokenUp(): Observable<LoginResponse> {
    return this.getHttp().post<LoginResponse>(this.getApiUrl().authUrls.tokenUp, null, {headers: this.getHeader()});
  }
}
