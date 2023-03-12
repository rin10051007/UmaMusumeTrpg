import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from '../../../../../../dist/common';
import { Request } from '../models/request.model';
import { Response } from '../models/response.model';
import { User } from '../models/user.model';

@Injectable()
export class ApiService extends BaseApiService {
  login(user: User): Observable<Response> {
    const request: Request = {
      loginUser: user
    }
    return this.getHttp().post<Response>(this.getApiUrl().authUrls.login, request, { headers: this.getHeader() });
  }
}
