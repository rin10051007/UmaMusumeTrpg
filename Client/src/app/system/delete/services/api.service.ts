import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrls } from '../../../../const/api-url';
import { ItemModel } from '../models/item';
import { RequestModel } from '../models/request';
import { ResponseModel } from '../models/response';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  delete(item: ItemModel): Observable<ResponseModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const request: RequestModel = {
      delete: item
    }
    return this.http.post<ResponseModel>(apiUrls.sysUrls.delete, request, { headers: headers });
  }
}
