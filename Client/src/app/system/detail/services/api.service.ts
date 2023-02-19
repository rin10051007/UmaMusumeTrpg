import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrls } from '../../../../const/api-url';
import { RequestModel } from '../models/request';
import { ResponseModel } from '../models/response';
import { SearchModel } from '../models/search';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  detail(search: SearchModel): Observable<ResponseModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const request: RequestModel = {
      search: search
    }
    return this.http.post<ResponseModel>(apiUrls.sysUrls.detail, request, { headers: headers });
  }
}
