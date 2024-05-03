import {Injectable} from "@angular/core";
import {AbstractControl, FormControl, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";

@Injectable()
export class PasswordMatch implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.parent?.get('password') as FormControl;
    const passwordCfm = control.parent?.get('passwordCfm') as FormControl;
    return (password && passwordCfm && password.value === passwordCfm.value) ? null : {'passwordMismatch': true};
  }
}

export function PasswordMatchValidator(): ValidatorFn {
  const validator = new PasswordMatch();
  return validator.validate.bind(validator);
}
