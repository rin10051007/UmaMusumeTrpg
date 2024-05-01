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
import {Item} from "../models/item.model";

@Injectable()
export class Edit extends BaseForm {

  constructor(private isLoginIdDuplicateApiService: IsLoginIdDuplicateApiService) {
    super(new FormGroup({}));
  }

  createForm() {
    this.getFormGroup().addControl('loginId', new FormControl('', [Validators.required], [IsLoginIdDuplicate.validator(this.isLoginIdDuplicateApiService)]));
    this.getFormGroup().addControl('name', new FormControl('', [Validators.required]));
    this.getFormGroup().addControl('sysPermission', new FormControl(SysPermission.None, [Validators.required]));
    this.getFormGroup().addControl('umaMusumeTrpgPermission', new FormControl(UmaMusumeTrpgPermission.None, [Validators.required]));
    this.getFormGroup().addControl('email', new FormControl('', [Validators.email, Validators.required]));
    this.getFormGroup().addControl('password', new FormControl('', []));
    this.getFormGroup().addControl('passwordCfm', new FormControl('', [PasswordMatchValidator]));
    this.getFormGroup().addControl('id', new FormControl(0, [Validators.required]));
    this.getFormGroup().addControl('token', new FormControl('', [Validators.required]));
  }

  setValues(item: Item) {
    this.getForm('loginId').setValue(item.loginId);
    this.getForm('name').setValue(item.name);
    this.getForm('sysPermission').setValue(item.sysPermission);
    this.getForm('umaMusumeTrpgPermission').setValue(item.umaMusumeTrpgPermission);
    this.getForm('email').setValue(item.email);
    this.getForm('id').setValue(item.id);
    this.getForm('token').setValue(item.token);
  }
}
