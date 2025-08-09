import {FormControl, FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";
import {BaseForm} from "../../base.form";
import {SearchItem, SearchItemForThread, SearchItemForUser} from "../../../models/public-model";

@Injectable()
export class Search extends BaseForm {

  constructor() {
    super(new FormGroup({}));
  }

  createForm() {
    this.getFormGroup().addControl('content', new FormControl(''));
    this.getFormGroup().addControl('creatingTimeBeginning', new FormControl(null));
    this.getFormGroup().addControl('creatingTimeEnd', new FormControl(null));
  }

  setValues(search: SearchItem | null) {
    this.setValue('content', search?.content || '');
    this.setValue('creatingTimeBeginning', search?.content || null);
    this.setValue('creatingTimeEnd', search?.content || null);
  }

  createFormForThread() {
    this.createForm();
    this.getFormGroup().addControl('threadId', new FormControl(0));
    this.getFormGroup().addControl('threadResNoBeginning', new FormControl(0));
    this.getFormGroup().addControl('threadResNoEnd', new FormControl(0));
  }

  setValuesForThread(search: SearchItemForThread | null) {
    this.setValues(search);
    this.setValue('threadId', Number(search?.threadId || 0));
    this.setValue('threadResNoBeginning', Number(search?.threadResNoBeginning || 0));
    this.setValue('threadResNoEnd', Number(search?.threadResNoEnd || 0));
  }

  createFormForUser() {
    this.createForm();
    this.getFormGroup().addControl('creatingUserId', new FormControl(0));
  }

  setValuesForUser(search: SearchItemForUser | null) {
    this.setValues(search);
    this.setValue('threadId', Number(search?.creatingUserId || 0));
  }
}
