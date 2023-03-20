import { Component } from '@angular/core';
import { AuthApiService, ConveniencesService, environment, LocalStorageItem, LocalStorageService, User } from '../../../../../dist/common';

@Component({
  selector: 'AuthControl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = { loginId: '', password: '' }
  constructor(private apiService: AuthApiService, private lsService: LocalStorageService, private conveniencesService: ConveniencesService) { }
  login() {
    this.apiService.login(this.user).subscribe(r => {
      this.lsService.setInfo(r.loginItem as unknown as LocalStorageItem);
      var viewProject = this.lsService.getInfo()?.viewProject;
      if (!this.conveniencesService.isEmpty(viewProject)) {
        window.location.href = environment.baseUrl + viewProject;
      }
      //上位権限から確認して遷移する
    })
  }
}
