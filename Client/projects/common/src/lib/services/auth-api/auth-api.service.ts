import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request, Response, User } from '../../models/public-model';
import { BaseApiService } from '../public-service';

@Injectable()
export class AuthApiService extends BaseApiService {
  login(user: User): Observable<Response> {
    const request: Request = {
      loginUser: user
    }
    return this.getHttp().post<Response>(this.getApiUrl().authUrls.login, request, { headers: this.getHeader() });
  }

  tokenUp(): Observable<Response> {
    return this.getHttp().post<Response>(this.getApiUrl().authUrls.tokenUp, null, { headers: this.getHeader() });
  }
}
