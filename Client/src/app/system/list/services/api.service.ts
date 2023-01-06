import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrls } from 'src/const/api-url';
import { ResponseModel } from '../interfaces/response';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }
  getList(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(this.getListUrl(),);
  }


  private getListUrl(): string {
    return apiUrls.sysUrls.getList;
  }
}
