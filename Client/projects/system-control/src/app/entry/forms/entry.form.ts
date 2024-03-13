import {BaseForm, PasswordMatchValidator, SysPermission, UmaMusumeTrpgPermission} from "Common";
import {FormGroup, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable()
export class Entry extends BaseForm {

  constructor() {
    super(new FormGroup({}));
  }

  createForm() {
    this.getFormGroup().addControl('loginId', ['', [Validators.required]]);
    this.getFormGroup().addControl('name', ['', [Validators.required]]);
    this.getFormGroup().addControl('sysPermission', [SysPermission.None, [Validators.required]]);
    this.getFormGroup().addControl('umaMusumeTrpgPermission', [UmaMusumeTrpgPermission.None, [Validators.required]]);
    this.getFormGroup().addControl('email', ['', [Validators.required]]);
    this.getFormGroup().addControl('password', ['', [Validators.required]]);
    this.getFormGroup().addControl('passwordCfm', ['', [Validators.required, PasswordMatchValidator]]);
  }
}
