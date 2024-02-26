import { Component } from '@angular/core';
import {
  AuthApiService,
  AuthorityConfApiService,
  ConveniencesService,
  LocalStorageService,
  LocalStorageToken,
  LoginUser,
  environment,
  myPolicyName
} from 'Common';
import { concat, first } from 'rxjs';
import { LoginUserForm } from '../forms/login-user.form';

@Component({
  selector: 'AuthControl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private apiService: AuthApiService, private lsService: LocalStorageService, private conveniencesService: ConveniencesService,
    private authorityConfApiService: AuthorityConfApiService, public loginUser: LoginUserForm) {
    this.lsService.removeToken();
  }

  login() {
    this.apiService.logIn(this.loginUser.getValue() as LoginUser).subscribe((r: { loginItem: unknown; }) => {
      this.lsService.setToken(r.loginItem as unknown as LocalStorageToken);
      var viewProject = this.lsService.getViewProject();
      if (this.lsService.getToken()) {
        if (!this.conveniencesService.isEmpty(viewProject)) {
          window.location.href = environment.baseUrl + viewProject;
        }
        concat(
          this.authorityConfApiService.isSysPermissionToAdmin(),
          this.authorityConfApiService.isUmaMusumeGmPlayer(),
          this.authorityConfApiService.isUmaMusumePlayer(),
        ).pipe(first(r => r.isAllows)).subscribe(r => {
          if (r.isAllows) {
            switch (r.playerName) {
              case myPolicyName.sysAdminPolicy:
                window.location.href = environment.baseUrl + environment.systemUrl;
                break;
              case myPolicyName.umaMusumeGmPlayerPolicy:
              case myPolicyName.umaMusumePlayerPolicy:
                window.location.href = environment.baseUrl + environment.umaMusumeUrl;
                break;
            }
          }
        });
      }
    })
  }
}
