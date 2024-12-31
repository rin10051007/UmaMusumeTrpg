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
    this.getFormGroup().addControl('creationTimeStart', new FormControl(''));
    this.getFormGroup().addControl('creationTimeEnd', new FormControl(''));
    this.getFormGroup().addControl('updateTimeStart', new FormControl(''));
    this.getFormGroup().addControl('updateTimeEnd', new FormControl(''));
    this.getFormGroup().addControl('deletingTimeStart', new FormControl(''));
    this.getFormGroup().addControl('deletingTimeEnd', new FormControl(''));
  }

  setValues(search: SearchItem | null) {
    this.setValue('integration', search?.integration || '');
    this.setValue('loginId', search?.loginId || '');
    this.setValue('name', search?.name || '');
    this.setValue('email', search?.email || '');
    this.setValue('sysPermission', Number(search?.sysPermission || 0));
    this.setValue('umaMusumeTrpgPermission', Number(search?.umaMusumeTrpgPermission || 0));
    this.setValue('isUndeleted', Boolean(search?.isUndeleted||false));
    this.setValue('isDeleted', Number(search?.isDeleted||false));
    this.setValue('creationTimeStart', search?.creationTimeStart || '');
    this.setValue('creationTimeEnd', search?.creationTimeEnd || '');
    this.setValue('updateTimeStart', search?.updateTimeStart || '');
    this.setValue('updateTimeEnd', search?.updateTimeEnd || '');
    this.setValue('deletingTimeStart', search?.deletingTimeStart || '');
    this.setValue('deletingTimeEnd', search?.deletingTimeEnd || '');
  }
}
