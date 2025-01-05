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
    this.setValue('creatingUserId', search?.creatingUserId || 0);
    this.setValue('title', search?.title || '');
    this.setValue('resCountMin', search?.resCountMin || 0);
    this.setValue('resCountMax', search?.resCountMax || 0);
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
