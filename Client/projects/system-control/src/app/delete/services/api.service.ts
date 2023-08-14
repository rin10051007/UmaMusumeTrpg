import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseApiService} from 'Common';
import {Item} from '../models/item.model';
import {Request} from '../models/request.model';
import {Response} from '../models/response.model';

@Injectable()
export class ApiService extends BaseApiService {

  delete(item: Item): Observable<Response> {
    const request: Request = {
      delete: item
    }
    return this.getHttp().post<Response>(this.getApiUrl().sysUrls.delete, request, {headers: this.getHeader()});
  }
}
