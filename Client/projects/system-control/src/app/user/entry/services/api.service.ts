import {Injectable} from '@angular/core';
import {BaseApiService} from "Common";
import {Observable} from 'rxjs';
import {Item} from '../models/item.model';
import {Request} from '../models/request.model';
import {Response} from '../models/response.model';

@Injectable()
export class ApiService extends BaseApiService {
  entry(item: Item): Observable<Response> {
    const request: Request = {
      entry: item,
    }
    return this.getHttp().post<Response>(this.getApiUrl().sysUrls.user.entry, request, {headers: this.getHeader()});
  }
}
