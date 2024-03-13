import {IsLoginIdDuplicateApiService} from "../../services/public-service";
import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, map, switchMap} from 'rxjs/operators';
import {Injectable} from "@angular/core";

@Injectable()
export class IsLoginIdDuplicateValidator implements AsyncValidator {
  constructor(private isLoginIdDuplicateApiService: IsLoginIdDuplicateApiService) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const value = control.value;

    return of(value).pipe(
      debounceTime(300),
      switchMap(() => this.isLoginIdDuplicateApiService.isLoginIdDuplicate(value)),
      map(result => (result ? null : {'isLoginIdDuplicate': true})),
      catchError(() => of(null))
    );
  }
}
