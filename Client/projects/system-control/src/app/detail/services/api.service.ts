import { Injectable } from '@angular/core';
import { BaseApiService } from 'Common';
import { Observable } from 'rxjs';
import { Request } from '../models/request.model';
import { Response } from '../models/response.model';
import { Search } from '../models/search.model';

@Injectable()
export class ApiService extends BaseApiService {

  detail(search: Search): Observable<Response> {
    const request: Request = {
      search: search
    }
    return this.getHttp().post<Response>(this.getApiUrl().sysUrls.detail, request, { headers: this.getHeader() });
  }
}
