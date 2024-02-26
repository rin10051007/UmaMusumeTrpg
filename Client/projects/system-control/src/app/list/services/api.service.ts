import { Injectable } from '@angular/core';
import { BaseApiService } from 'Common';
import { Observable } from 'rxjs';
import { Request } from '../models/request.model';
import { Response } from '../models/response.model';
import { Search } from '../models/search.model';

@Injectable()
export class ApiService extends BaseApiService {
  getList(search: Search): Observable<Response> {
    const request: Request = {
      Search: search
    }
    return this.getHttp().post<Response>(this.getApiUrl().sysUrls.getList, request, { headers: this.getHeader() });
  }
}
