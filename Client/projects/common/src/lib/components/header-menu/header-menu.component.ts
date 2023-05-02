import {Component} from '@angular/core';
import {environment} from '../../environments/environment';
import {LocalStorageToken} from '../../models/public-model';
import {AuthApiService, LocalStorageService} from '../../services/public-service';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {
  systemUrl!: string;
  umaMusumeUrl!: string;

  constructor(private authApiService: AuthApiService, private lsService: LocalStorageService) {
    this.systemUrl = environment.systemUrl;
    this.umaMusumeUrl = environment.umaMusumeUrl;
    this.authApiService.tokenUp().subscribe(s =>
      this.lsService.setToken(s.loginItem as unknown as LocalStorageToken));
  }

  logOut() {
    this.lsService.removeToken();
    window.location.href = environment.baseUrl + environment.authUrl;
  }

  screenTransition(url: string) {
    window.location.href = environment.baseUrl + url;
  }
}
