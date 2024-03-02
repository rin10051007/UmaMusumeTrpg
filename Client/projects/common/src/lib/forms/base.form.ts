import { AbstractControl, FormGroup } from "@angular/forms";

export class BaseForm {
  formGroup: FormGroup;

  constructor(form: FormGroup) {
    this.formGroup = form;
  }

  getFormGroup(): FormGroup {
    return this.formGroup;
  }

  getForm(key: string): AbstractControl | null {
    return this.getFormGroup().get(key);
  }

  getValue() {
    return this.formGroup.getRawValue();
  }

  patchValue(value: any) {
    this.formGroup.patchValue(value);
  }

  isRequired(key: string): boolean {
    return this.hasError(key, 'required');
  }

  hasError(key: string, type: string): boolean {
    var form = this.formGroup.get(key);
    return form != null && (form.invalid && (form.touched || form.dirty)) && form.hasError(type);
  }
}