import {Component} from '@angular/core';
import {environment} from '../../environments/environment';
import {ClaimItem, LocalStorageToken} from '../../models/public-model';
import {AuthApiService, JwtManagementService, LocalStorageService} from '../../services/public-service';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css'],
  standalone: false
})
export class HeaderMenuComponent {
  systemUrl!: string;
  umaMusumeUrl!: string;
  item!: ClaimItem;

  constructor(private authApiService: AuthApiService, private lsService: LocalStorageService, private jwtService: JwtManagementService) {
    this.systemUrl = environment.systemUrl;
    this.umaMusumeUrl = environment.umaMusumeUrl;
    this.item = this.jwtService.getItem();
    this.authApiService.tokenUp().subscribe(() => {
      (s: { loginItem: unknown; }) =>
        this.lsService.setToken(s.loginItem as unknown as LocalStorageToken)
    }, () => this.logOut());
  }

  logOut() {
    this.lsService.removeToken();
    window.location.href = environment.baseUrl + environment.authUrl;
  }

  screenTransition(url: string) {
    window.location.href = environment.baseUrl + url;
  }

  screenTransitionUser(id: number) {
    if (window.location.href.includes(this.systemUrl)) {
      this.screenTransition(this.systemUrl + '/user/detail/' + this.item.Id);
    } else if (window.location.href.includes(this.umaMusumeUrl)) {
      this.screenTransition(this.umaMusumeUrl + '/user/detail/' + this.item.Id);
    }
  }
}
