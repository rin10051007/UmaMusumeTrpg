import { Injectable } from '@angular/core';
import { apiUrls, BaseApiService } from '../../../../../../dist/common';
import { Search } from '../models/search.model';
import { Request } from '../models/request.model';
import { Response } from '../models/response.model';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService extends BaseApiService {
  getList(search: Search): Observable<Response> {
    const request: Request = {
      Search: search
    }
    return this.getHttp().post<Response>(apiUrls.sysUrls.getList, request, { headers: this.getHeader() });
  }
}
