import {FormControl, FormGroup} from "@angular/forms";

export class BaseForm {
  formGroup: FormGroup;

  constructor(form: FormGroup) {
    this.formGroup = form;
  }

  getFormGroup(): FormGroup {
    return this.formGroup;
  }

  getForm(key: string): FormControl {
    return (this.getFormGroup().get(key)) as FormControl;
  }

  getValues() {
    return this.formGroup.getRawValue();
  }

  getValue(key: string) {
    return ((this.getFormGroup().get(key)) as FormControl).value;
  }

  patchValue(value: any) {
    this.formGroup.patchValue(value);
  }

  isRequired(key: string): boolean {
    return this.hasError(key, 'required');
  }

  hasError(key: string, type: string): boolean {
    const form = this.formGroup.get(key);
    return form != null && (form.invalid && (form.touched || form.dirty)) && form.hasError(type);
  }
}
