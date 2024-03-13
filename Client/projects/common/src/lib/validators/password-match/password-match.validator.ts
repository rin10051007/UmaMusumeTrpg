import {AbstractControl, FormControl, ValidationErrors, Validator} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable()
export class PasswordMatchValidator implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.parent?.get('password') as FormControl;
    const passwordCfm = control.parent?.get('passwordCfm') as FormControl;
    return (password && passwordCfm && password.value === passwordCfm.value) ? null : {'passwordMismatch': true};
  }
}
