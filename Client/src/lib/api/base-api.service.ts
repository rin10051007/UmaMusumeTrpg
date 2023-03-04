import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseApiService {

  constructor(private http: HttpClient) { }
}
