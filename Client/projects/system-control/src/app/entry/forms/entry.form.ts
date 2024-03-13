import {
  BaseForm,
  IsLoginIdDuplicateApiService,
  IsLoginIdDuplicateValidator,
  PasswordMatchValidator,
  SysPermission,
  UmaMusumeTrpgPermission
} from "Common";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable()
export class Entry extends BaseForm {

  constructor(private isLoginIdDuplicateApiService: IsLoginIdDuplicateApiService) {
    super(new FormGroup({}));
  }

  createForm() {
    this.getFormGroup(),
      this.getFormGroup().addControl('loginId', new FormControl('', [Validators.required, IsLoginIdDuplicateValidator(this.isLoginIdDuplicateApiService)]));
    this.getFormGroup().addControl('name', new FormControl('', [Validators.required]));
    this.getFormGroup().addControl('sysPermission', new FormControl(SysPermission.None, [Validators.required]));
    this.getFormGroup().addControl('umaMusumeTrpgPermission', new FormControl(UmaMusumeTrpgPermission.None, [Validators.required]));
    this.getFormGroup().addControl('email', new FormControl('', [Validators.required]));
    this.getFormGroup().addControl('password', new FormControl('', [Validators.required]));
    this.getFormGroup().addControl('passwordCfm', new FormControl('', [Validators.required]));
    this.getFormGroup().addControl('passwordCfm', new FormControl('', [Validators.required, Validators.minLength(1), PasswordMatchValidator]));
  }
}
