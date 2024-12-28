import {Injectable} from '@angular/core';
import {BaseApiService} from 'Common';
import {Observable} from 'rxjs';
import {Request} from '../models/request.model';
import {Response} from '../models/response.model';
import {Select} from '../models/select.model';

@Injectable()
export class ApiService extends BaseApiService {

  detail(select: Select): Observable<Response> {
    const request: Request = {
      select: select
    }
    return this.getHttp().post<Response>(this.getApiUrl().sysUrls.detail, request, {headers: this.getHeader()});
  }
}
