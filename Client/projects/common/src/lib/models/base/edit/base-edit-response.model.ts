import {HttpStatusCode} from "@angular/common/http";

export interface BaseEditResponse {
  id: number;
  token: string;
  httpStatusCode: HttpStatusCode;
}
