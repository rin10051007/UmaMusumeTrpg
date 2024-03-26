import {HttpStatusCode} from "@angular/common/http";

export interface BaseEntryResponse {
  id: number;
  token: string;
  httpStatusCode: HttpStatusCode;
}
