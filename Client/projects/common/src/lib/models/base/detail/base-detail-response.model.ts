import { HttpStatusCode } from "@angular/common/http";
import {BaseDetailItem} from '../../public-model';

export interface BaseDetailResponse {
  detail: BaseDetailItem;
  httpStatusCode: HttpStatusCode;
}
