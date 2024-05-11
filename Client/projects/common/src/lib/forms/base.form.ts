import {Injectable} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable()
export class BaseForm {
  formGroup: FormGroup;

  constructor(private form: FormGroup) {
    this.formGroup = form;
  }

  getFormGroup(): FormGroup {
    return this.formGroup;
  }

  getForm(key: string): FormControl {
    return (this.getFormGroup().get(key)) as FormControl;
  }

  getValues() {
    return this.getFormGroup().getRawValue();
  }

  getValue(key: string) {
    return (this.getForm(key) as FormControl).value;
  }

  setValue(key: string, value: any) {
    this.getForm(key).setValue(value);
  }

  toReset() {
    this.getFormGroup().reset();
  }

  patchValue(value: any) {
    this.getFormGroup().patchValue(value);
  }

  isRequired(key: string): boolean {
    return this.hasError(key, 'required');
  }

  isPattern(key: string): boolean {
    return this.hasError(key, 'pattern');
  }

  isLoginIdDuplicate(key: string): boolean {
    return this.hasError(key, 'isLoginIdDuplicate');
  }


  isPasswordMatch(): boolean {
    return this.getFormGroup().hasError('passwordMismatch');
  }

  isError(): boolean {
    for (const key in this.getFormGroup().controls) { // 'field' is a st
      if (this.getForm(key).errors) return true;
    }
    return false;
  }

  setTouched() {
    this.getFormGroup().markAllAsTouched();
  }

  hasError(key: string, type: string): boolean {
    const form = this.getFormGroup().get(key);
    if (type == 'isLoginIdDuplicate') {
    }
    return form != null && ((form.touched || form.dirty)) && form.hasError(type);
  }
}
