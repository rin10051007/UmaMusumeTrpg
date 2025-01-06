import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {IsLoginIdDuplicateRequestModel} from "../../models/public-model";
import {BaseApiService} from "../public-service";

@Injectable()
export class IsLoginIdDuplicateApiService extends BaseApiService {
  isLoginIdDuplicate(loginId: string, id: number = 0): Observable<boolean> {
    const request: IsLoginIdDuplicateRequestModel = {
      loginId: {
        loginId: loginId,
        id: id
      },
    }
    return this.getHttp().post<boolean>(this.getApiUrl().userUrls.isLoginIdDuplicate, request, {headers: this.getHeader()});
  }
}
