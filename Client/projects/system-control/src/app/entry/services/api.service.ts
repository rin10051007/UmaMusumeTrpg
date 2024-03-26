import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Item} from '../models/item.model';
import {Request} from '../models/request.model';
import {Response} from '../models/response.model';
import {BaseApiService} from "Common";

@Injectable()
export class ApiService extends BaseApiService {
  entry(item: Item): Observable<Response> {
    const request: Request = {
      entry: item,
    }
    return this.getHttp().post<Response>(this.getApiUrl().sysUrls.entry, request, {headers: this.getHeader()});
  }
}
