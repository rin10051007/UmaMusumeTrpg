import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from '../../../../../../dist/common';
import { Item } from '../models/item.model';
import { Request } from '../models/request.model';
import { Response } from '../models/response.model';

@Injectable()
export class ApiService extends BaseApiService {
  edit(item: Item): Observable<Response> {
    const request: Request = {
      edit: item,
    }
    return this.getHttp().post<Response>(this.getApiUrl().sysUrls.edit, request, { headers: this.getHeader() });
  }
}
