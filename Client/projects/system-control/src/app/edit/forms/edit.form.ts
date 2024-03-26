import {BaseForm, IsLoginIdDuplicateApiService} from "Common";
import {Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Injectable()
export class Edit extends BaseForm {

  constructor(private isLoginIdDuplicateApiService: IsLoginIdDuplicateApiService) {
    super(new FormGroup({}));
  }

  createForm() {

  }
}
