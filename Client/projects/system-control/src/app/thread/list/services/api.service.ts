import {Injectable} from '@angular/core';
import {BaseApiService} from 'Common';
import {Observable} from "rxjs";
import {Request} from '../models/request.model';
import {NameListResponse, Response} from '../models/response.model';
import {SearchItem} from '../models/search-item.model';

@Injectable()
export class ApiService extends BaseApiService {
  getList(search: SearchItem): Observable<Response> {
    const request: Request = {
      search: search
    }
    return this.getHttp().post<Response>(this.getApiUrl().threadUrls.getListForSystemThread, request, {headers: this.getHeader()});
  }

  getNameList(): Observable<NameListResponse> {
    return this.getHttp().post<NameListResponse>(this.getApiUrl().userUrls.getNameList, {headers: this.getHeader()});
  }
}
