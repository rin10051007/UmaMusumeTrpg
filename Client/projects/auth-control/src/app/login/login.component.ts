import { Component } from '@angular/core';
import { concat, first } from 'rxjs';
import { AuthApiService, AuthorityConfApiService, ConveniencesService, environment, LocalStorageToken, LocalStorageService, LoginUser, myPolicyName } from 'common';

@Component({
  selector: 'AuthControl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: LoginUser = { loginId: '', password: '' }
  constructor(private apiService: AuthApiService, private lsService: LocalStorageService, private conveniencesService: ConveniencesService,
    private authorityConfApiService: AuthorityConfApiService) {
    this.lsService.removeToken();
  }
  login() {
    this.apiService.logIn(this.user).subscribe((r: { loginItem: unknown; }) => {
      this.lsService.setToken(r.loginItem as unknown as LocalStorageToken);
      var viewProject = this.lsService.getViewProject();
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
    })
  }
}
