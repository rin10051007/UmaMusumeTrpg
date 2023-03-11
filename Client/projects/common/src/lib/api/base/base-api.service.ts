import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { apiUrls } from "../../const/public-const";


@Injectable()
export class BaseApiService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getHttp() { return this.http; }
  getHeader() { return this.headers; }
  getApiUrl() { return apiUrls; }
}
