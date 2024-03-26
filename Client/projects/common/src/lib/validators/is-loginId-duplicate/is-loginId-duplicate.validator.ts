import {IsLoginIdDuplicateApiService} from "../../services/public-service";
import {AbstractControl, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
import {Injectable} from "@angular/core";

@Injectable()
export class IsLoginIdDuplicate implements Validator {
  constructor(private isLoginIdDuplicateApiService: IsLoginIdDuplicateApiService) {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return this.isLoginIdDuplicateApiService.isLoginIdDuplicate(value).subscribe(r => (r ? null : {'isLoginIdDuplicate': true}), e => null)

  }
}

export function IsLoginIdDuplicateValidator(isLoginIdDuplicateApiService: IsLoginIdDuplicateApiService): ValidatorFn {
  const validator = new IsLoginIdDuplicate(isLoginIdDuplicateApiService);
  return validator.validate.bind(validator);
}
