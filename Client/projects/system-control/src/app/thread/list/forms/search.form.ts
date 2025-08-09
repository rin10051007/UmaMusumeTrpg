import {BaseForm} from "common";
import {FormControl, FormGroup} from "@angular/forms";
import {SearchItem} from "../models/search-item.model";
import {Injectable} from "@angular/core";

@Injectable()
export class Search extends BaseForm {

  constructor() {
    super(new FormGroup({}));
  }

  createForm() {
    this.getFormGroup().addControl('creatingUserId', new FormControl(0));
    this.getFormGroup().addControl('title', new FormControl(''));
    this.getFormGroup().addControl('resCountMin', new FormControl(0));
    this.getFormGroup().addControl('resCountMax', new FormControl(0));
    this.getFormGroup().addControl('isActive', new FormControl(false));
    this.getFormGroup().addControl('isUndeleted', new FormControl(true));
    this.getFormGroup().addControl('isDeleted', new FormControl(false));
    this.getFormGroup().addControl('creatingTimeBeginning', new FormControl(null));
    this.getFormGroup().addControl('creatingTimeEnd', new FormControl(null));
    this.getFormGroup().addControl('updatingTimeBeginning', new FormControl(null));
    this.getFormGroup().addControl('updatingTimeEnd', new FormControl(null));
    this.getFormGroup().addControl('deletingTimeBeginning', new FormControl(null));
    this.getFormGroup().addControl('deletingTimeEnd', new FormControl(null));
  }

  setValues(search: SearchItem | null) {
    this.setValue('creatingUserId', Number(search?.creatingUserId || 0));
    this.setValue('title', search?.title || '');
    this.setValue('resCountMin', Number(search?.resCountMin || 0));
    this.setValue('resCountMax', Number(search?.resCountMax || 0));
    this.setValue('isActive', Boolean((search?.isActive || 'false').toString() == 'true'));
    this.setValue('isUndeleted', Boolean((search?.isUndeleted || 'true').toString() == 'true'));
    this.setValue('isDeleted', Boolean((search?.isDeleted || 'false').toString() == 'true'));
    this.setValue('creatingTimeBeginning', search?.creatingTimeBeginning || null);
    this.setValue('creatingTimeEnd', search?.creatingTimeEnd || null);
    this.setValue('updatingTimeBeginning', search?.updatingTimeBeginning || null);
    this.setValue('updatingTimeEnd', search?.updatingTimeEnd || null);
    this.setValue('deletingTimeBeginning', search?.deletingTimeBeginning || null);
    this.setValue('deletingTimeEnd', search?.deletingTimeEnd || null);
  }
}
