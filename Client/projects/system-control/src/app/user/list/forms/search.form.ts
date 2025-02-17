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
    this.getFormGroup().addControl('creatingTimeBeginning', new FormControl(''));
    this.getFormGroup().addControl('creatingTimeEnd', new FormControl(''));
    this.getFormGroup().addControl('updatingTimeBeginning', new FormControl(''));
    this.getFormGroup().addControl('updatingTimeEnd', new FormControl(''));
    this.getFormGroup().addControl('deletingTimeBeginning', new FormControl(''));
    this.getFormGroup().addControl('deletingTimeEnd', new FormControl(''));
  }

  setValues(search: SearchItem | null) {
    this.setValue('integration', search?.integration || '');
    this.setValue('loginId', search?.loginId || '');
    this.setValue('name', search?.name || '');
    this.setValue('email', search?.email || '');
    this.setValue('sysPermission', Number(search?.sysPermission || SysPermission.None));
    this.setValue('umaMusumeTrpgPermission', Number(search?.umaMusumeTrpgPermission || UmaMusumeTrpgPermission.None));
    this.setValue('isUndeleted', Boolean((search?.isUndeleted || 'true').toString() == 'true'));
    this.setValue('isDeleted', Boolean((search?.isDeleted || 'false').toString() == 'true'));
    this.setValue('creatingTimeBeginning', search?.creatingTimeBeginning || '');
    this.setValue('creatingTimeEnd', search?.creatingTimeEnd || '');
    this.setValue('updatingTimeBeginning', search?.updatingTimeBeginning || '');
    this.setValue('updatingTimeEnd', search?.updatingTimeEnd || '');
    this.setValue('deletingTimeBeginning', search?.deletingTimeBeginning || '');
    this.setValue('deletingTimeEnd', search?.deletingTimeEnd || '');
  }
}
