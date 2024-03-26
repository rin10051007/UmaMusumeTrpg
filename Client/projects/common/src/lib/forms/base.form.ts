import {FormControl, FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";

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
    return ((this.getFormGroup().get(key)) as FormControl).value;
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
    return form != null && ((form.touched || form.dirty)) && form.hasError(type);
  }
}
