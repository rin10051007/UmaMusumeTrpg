import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  BaseForm,
  IsLoginIdDuplicate,
  IsLoginIdDuplicateApiService,
  PasswordMatchValidator,
  SysPermission,
  UmaMusumeTrpgPermission
} from "Common";

@Injectable()
export class Entry extends BaseForm {

  constructor(private isLoginIdDuplicateApiService: IsLoginIdDuplicateApiService) {
    super(new FormGroup({}));
  }

  createForm() {
    this.getFormGroup().addControl('loginId', new FormControl('', [Validators.required], [IsLoginIdDuplicate.validator(this.isLoginIdDuplicateApiService)]));
    this.getFormGroup().addControl('name', new FormControl('', [Validators.required]));
    this.getFormGroup().addControl('sysPermission', new FormControl(SysPermission.None, [Validators.required]));
    this.getFormGroup().addControl('umaMusumeTrpgPermission', new FormControl(UmaMusumeTrpgPermission.None, [Validators.required]));
    this.getFormGroup().addControl('email', new FormControl('', [Validators.email, Validators.required]));
    this.getFormGroup().addControl('password', new FormControl('', [Validators.required]));
    this.getFormGroup().addControl('passwordCfm', new FormControl('', [Validators.required, PasswordMatchValidator]));
  }
}
