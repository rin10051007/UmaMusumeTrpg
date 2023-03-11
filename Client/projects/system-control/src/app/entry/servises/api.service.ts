import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrls, BaseApiService } from '../../../../../../dist/common';
import { Item } from '../models/item.model';
import { Request } from '../models/request.model';
import { Response } from '../models/response.model';

@Injectable()
export class ApiService extends BaseApiService {
  entry(item: Item): Observable<Response> {
    const request: Request = {
      entry: item,
    }
    return this.getHttp().post<Response>(apiUrls.sysUrls.entry, request, { headers: this.getHeader() });
  }
}
