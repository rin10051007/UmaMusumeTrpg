import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrls } from 'src/const/api-url';
import { SortDirection } from '../../../../lib/enum/sort-direction';
import { SysPermission } from '../../../../lib/enum/sys-permission';
import { SystemSortItem } from '../../../../lib/enum/system/sort-item';
import { UmaMusumeTrpgPermission } from '../../../../lib/enum/uma-musume-trpg-permission';
import { RequestModel } from '../interfaces/request';
import { ResponseModel } from '../interfaces/response';
import { SearchModel } from '../interfaces/search';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }
  getList(search: SearchModel): Observable<ResponseModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    search.Name = '';
    search.SysPermissions = SysPermission.NoQualification;
    search.UmaMusumeTrpgPermissions = UmaMusumeTrpgPermission.NoQualification;
    search.SortItem = SystemSortItem.id;
    search.SortDirection = SortDirection.none;
    search.DisplayPage = 1;
    search.DisplayCount = 10;
    const request: RequestModel = {
      Search: search
    }
    console.log(request);
    return this.http.post<ResponseModel>(this.getListUrl(), request, { headers: headers });
  }


  private getListUrl(): string {
    return apiUrls.sysUrls.getList;
  }
}
