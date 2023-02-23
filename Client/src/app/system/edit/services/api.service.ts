import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response';
import { ItemModel } from '../models/item';
import { RequestModel } from '../models/request';
import { apiUrls } from '../../../../const/api-url';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  edit(item: ItemModel): Observable<ResponseModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const request: RequestModel = {
      edit: item
    }
    return this.http.post<ResponseModel>(apiUrls.sysUrls.edit, request, { headers: headers });
  }
}
