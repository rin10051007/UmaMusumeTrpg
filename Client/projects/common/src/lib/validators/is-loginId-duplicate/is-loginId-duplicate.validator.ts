import {Injectable} from "@angular/core";
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {map, Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {IsLoginIdDuplicateApiService} from "../../services/public-service";

@Injectable()
export class IsLoginIdDuplicate {
  static validator(isLoginIdDuplicateApiService: IsLoginIdDuplicateApiService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const loginId = control.value;
      const id = control.root.get('id')?.value;
      return isLoginIdDuplicateApiService.isLoginIdDuplicate(loginId, id).pipe(
        map(r => {
          return r ? {'isLoginIdDuplicate': true} : null;
        }), catchError(() => of(null))
      );
    }
  }
}
