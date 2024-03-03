import {FormGroup, ValidationErrors} from "@angular/forms";

export function passwordMatchValidator(control: FormGroup): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('passwordCfm');

  return password && confirmPassword && password.value === confirmPassword.value ? null : {'passwordMismatch': true};
}
