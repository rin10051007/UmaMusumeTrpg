import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from '../../../const/api-url.const';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getHttp() { return this.http; }
  getHeader() { return this.headers; }
  getApiUrl() { return apiUrls; }
}
