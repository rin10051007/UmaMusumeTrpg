import {Injectable} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {BaseForm, SysPermission, UmaMusumeTrpgPermission} from "Common";
import {SearchItem} from "../models/search-item.model";

@Injectable()
export class Search extends BaseForm {

  constructor() {
    super(new FormGroup({}));
  }

  createForm() {
    this.getFormGroup().addControl('integration', new FormControl(''));
    this.getFormGroup().addControl('loginId', new FormControl(''));
    this.getFormGroup().addControl('name', new FormControl(''));
    this.getFormGroup().addControl('email', new FormControl(''));
    this.getFormGroup().addControl('sysPermission', new FormControl(SysPermission.None));
    this.getFormGroup().addControl('umaMusumeTrpgPermission', new FormControl(UmaMusumeTrpgPermission.None));
    this.getFormGroup().addControl('isUndeleted', new FormControl(true));
    this.getFormGroup().addControl('isDeleted', new FormControl(false));
    this.getFormGroup().addControl('createTimeStart', new FormControl(''));
    this.getFormGroup().addControl('createTimeEnd', new FormControl(''));
    this.getFormGroup().addControl('updateTimeStart', new FormControl(''));
    this.getFormGroup().addControl('updateTimeEnd', new FormControl(''));
    this.getFormGroup().addControl('deleteTimeStart', new FormControl(''));
    this.getFormGroup().addControl('deleteTimeEnd', new FormControl(''));
  }

  setValues(search: SearchItem) {
    this.setValue('integration', search.integration);
    this.setValue('loginId', search.loginId);
    this.setValue('name', search.name);
    this.setValue('email', search.email);
    this.setValue('sysPermission', Number(search.sysPermission || 0));
    this.setValue('umaMusumeTrpgPermission', Number(search.umaMusumeTrpgPermission || 0));
    this.setValue('isUndeleted', Number(search.isUndeleted || 1) == 1);
    this.setValue('isDeleted', Number(search.isDeleted || 0) == 1);
    this.setValue('createTimeStart', search.createTimeStart);
    this.setValue('createTimeEnd', search.createTimeEnd);
    this.setValue('updateTimeStart', search.updateTimeStart);
    this.setValue('updateTimeEnd', search.updateTimeEnd);
    this.setValue('deleteTimeStart', search.deleteTimeStart);
    this.setValue('deleteTimeEnd', search.deleteTimeEnd);
  }
}
