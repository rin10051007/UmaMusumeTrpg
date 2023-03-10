import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class BaseApiService {

  constructor(private http: HttpClient) { }
}
