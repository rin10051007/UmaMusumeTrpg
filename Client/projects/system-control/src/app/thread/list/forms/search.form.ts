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
    this.getFormGroup().addControl('creationUserId', new FormControl(0));
    this.getFormGroup().addControl('title', new FormControl(''));
    this.getFormGroup().addControl('resCountMin', new FormControl(0));
    this.getFormGroup().addControl('resCountMax', new FormControl(0));
    this.getFormGroup().addControl('isUndeleted', new FormControl(true));
    this.getFormGroup().addControl('isDeleted', new FormControl(false));
    this.getFormGroup().addControl('creationTimeBeginning', new FormControl(''));
    this.getFormGroup().addControl('creationTimeEnd', new FormControl(''));
    this.getFormGroup().addControl('updateTimeBeginning', new FormControl(''));
    this.getFormGroup().addControl('updateTimeEnd', new FormControl(''));
    this.getFormGroup().addControl('deletingTimeBeginning', new FormControl(''));
    this.getFormGroup().addControl('deletingTimeEnd', new FormControl(''));
  }

  setValues(search: SearchItem | null) {
    this.setValue('creationUserId', search?.creationUserId || 0);
    this.setValue('title', search?.title || '');
    this.setValue('resCountMin', search?.resCountMin || 0);
    this.setValue('resCountMax', search?.resCountMax || 0);
    this.setValue('isUndeleted', Boolean((search?.isUndeleted || 'true').toString() == 'true'));
    this.setValue('isDeleted', Boolean((search?.isDeleted || 'false').toString() == 'true'));
    this.setValue('creationTimeBeginning', search?.creationTimeBeginning || '');
    this.setValue('creationTimeEnd', search?.creationTimeEnd || '');
    this.setValue('updateTimeBeginning', search?.updateTimeBeginning || '');
    this.setValue('updateTimeEnd', search?.updateTimeEnd || '');
    this.setValue('deletingTimeBeginning', search?.deletingTimeBeginning || '');
    this.setValue('deletingTimeEnd', search?.deletingTimeEnd || '');
  }
}
