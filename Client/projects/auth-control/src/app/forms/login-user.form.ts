import {FormBuilder, Validators} from "@angular/forms";
import {BaseForm, LoginUser} from "Common";

export class LoginUserForm extends BaseForm {

  constructor(loginUser?: LoginUser) {
    super(new FormBuilder().group({
      loginId: [loginUser?.loginId, [Validators.required]],
      password: [loginUser?.password, [Validators.required]]
    }));
  }
}
