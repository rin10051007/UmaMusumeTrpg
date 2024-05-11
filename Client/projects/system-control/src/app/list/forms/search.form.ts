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
    this.getFormGroup().addControl('isUndeleted', new FormControl(1));
    this.getFormGroup().addControl('isDeleted', new FormControl(0));
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
    this.setValue('sysPermission', Number(search.sysPermission));
    this.setValue('umaMusumeTrpgPermission', Number(search.umaMusumeTrpgPermission));
    this.setValue('isUndeleted', Number(search.isUndeleted));
    this.setValue('isDeleted', Number(search.isDeleted));
    this.setValue('createTimeStart', search.createTimeStart);
    this.setValue('createTimeEnd', search.createTimeEnd);
    this.setValue('updateTimeStart', search.updateTimeStart);
    this.setValue('updateTimeEnd', search.updateTimeEnd);
    this.setValue('deleteTimeStart', search.deleteTimeStart);
    this.setValue('deleteTimeEnd', search.deleteTimeEnd);
  }
}
