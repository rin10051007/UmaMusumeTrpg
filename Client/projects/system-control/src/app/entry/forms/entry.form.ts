import { FormBuilder, Validators } from "@angular/forms";
import { BaseForm, passwordMatchValidator } from "Common";
import { Item } from "../models/item.model";

export class Entry extends BaseForm {

  constructor(item?: Item) {
    super(new FormBuilder().group({
      loginId: [item?.loginId, [Validators.required]],
      sysPermission: [item?.sysPermission, [Validators.required]],
      umaMusumeTrpgPermission: [item?.umaMusumeTrpgPermission, [Validators.required]],
      email: [item?.email, [Validators.required, Validators.email]],
      password: [item?.password, [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()-_+=<>?{}[\]|\\/:;'",.]{4,}$/)]],
      passwordCfm: [item?.passwordcfm, [Validators.required, passwordMatchValidator]]
    }));
  }
}