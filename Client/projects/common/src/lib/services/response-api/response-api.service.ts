import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {BaseApiService} from '../public-service';
import {
  Request,
  RequestForThread,
  RequestForUser,
  Response,
  ResponseForThread,
  ResponseForUser,
  SearchItem,
  SearchItemForThread,
  SearchItemForUser
} from '../../models/public-model';

@Injectable()
export class ResponseApiService extends BaseApiService {
  getList(search: SearchItem): Observable<Response> {
    const request: Request = {
      search: search
    }
    return this.getHttp().post<Response>(this.getApiUrl().responseUrls.getList, request, {headers: this.getHeader()});
  }

  getListForThread(search: SearchItemForThread): Observable<ResponseForThread> {
    const request: RequestForThread = {
      search: search
    }
    return this.getHttp().post<ResponseForThread>(this.getApiUrl().responseUrls.getListForThread, request, {headers: this.getHeader()});
  }

  getListForUser(search: SearchItemForUser): Observable<ResponseForUser> {
    const request: RequestForUser = {
      search: search
    }
    return this.getHttp().post<ResponseForUser>(this.getApiUrl().responseUrls.getListForUser, request, {headers: this.getHeader()});
  }
}
