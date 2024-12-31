import {HttpStatusCode} from "@angular/common/http";

export interface BaseDeleteResponse {
  id: number;
  deletingTime: Date;
  httpStatusCode: HttpStatusCode;
}
