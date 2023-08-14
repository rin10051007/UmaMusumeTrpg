import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUser } from 'Common';

export class LoginUserForm {

  formGroup = new FormGroup({
    loginId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() {
  }

  getFormGroup(): FormGroup {
    return this.formGroup;
  }

  getForm(key: string): AbstractControl | null {
    return this.getFormGroup().get(key);
  }

  setValue(loginUser: LoginUser) {
    this.formGroup.setValue(loginUser);
  }

  getValue(): LoginUser {
    return this.formGroup.getRawValue() as LoginUser;
  }

  isRequired(key: string): boolean {
    return this.hasError(key, 'required');
  }

  hasError(key: string, type: string): boolean {
    var form = this.formGroup.get(key);
    return form != null && (form.invalid && (form.touched || form.dirty)) && form.hasError(type);
  }

}
