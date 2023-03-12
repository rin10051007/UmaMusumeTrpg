import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '../../../const/api-url.const';
import { LocalStorageService } from '../../public-service';

@Injectable()
export class BaseApiService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.lsSErvice.getInfo()?.token || ''}`
  });

  constructor(private http: HttpClient, private lsSErvice: LocalStorageService) {
    console.log(this.lsSErvice.getInfo());
  }

  getHttp() { return this.http; }
  getHeader() { return this.headers; }
  getApiUrl() { return apiUrls; }
}
