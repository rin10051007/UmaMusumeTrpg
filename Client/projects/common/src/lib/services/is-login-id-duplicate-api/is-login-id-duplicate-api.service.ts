import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {BaseApiService} from "../public-service";
import {IsLoginIdDuplicateRequestModel} from "../../models/public-model";

@Injectable()
export class IsLoginIdDuplicateApiService extends BaseApiService {
  isLoginIdDuplicate(loginId: string, id: number = 0): Observable<boolean> {
    const request: IsLoginIdDuplicateRequestModel = {
      loginId: {
        loginId: loginId,
        id: id
      },
    }
    return this.getHttp().post<boolean>(this.getApiUrl().sysUrls.isLoginIdDuplicate, request, {headers: this.getHeader()});
  }
}
