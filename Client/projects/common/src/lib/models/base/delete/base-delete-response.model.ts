import { HttpStatusCode } from "@angular/common/http";

export interface BaseDeleteResponse {
  id: number;
  deleteTime: Date;
  httpStatusCode: HttpStatusCode;
}
