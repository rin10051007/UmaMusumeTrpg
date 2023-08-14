import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {apiUrls} from '../../../const/api-url.const';

@Injectable()
export class BaseApiService {
  header = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  getHttp() {
    return this.http;
  }

  getHeader() {
    return this.header;
  }

  getApiUrl() {
    return apiUrls;
  }
}
