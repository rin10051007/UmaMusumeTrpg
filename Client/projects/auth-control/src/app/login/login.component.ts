import { Component } from '@angular/core';
import { AuthApiService, Item, LocalStorageService, User } from '../../../../../dist/common';

@Component({
  selector: 'AuthControl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = { loginId: '', password: '' }
  constructor(private apiService: AuthApiService, private lsService: LocalStorageService) { }
  login() {
    this.apiService.login(this.user).subscribe(r => {
      this.lsService.setInfo(r.loginItem as unknown as Item);
      //todo ユーザーの権限等でどこに遷移するのか
    })
  }
}
