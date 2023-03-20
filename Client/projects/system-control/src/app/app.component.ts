import { Component } from '@angular/core';
import { AuthApiService, environment, JwtManagementService, LocalStorageItem, LocalStorageService, SysPermission } from '../../../../dist/common';

@Component({
  selector: 'SystemControl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseUrl!: string;
  authUrl!: string;
  systemUrl!: string;
  umaMusumeUrl!: string;
  constructor(private authApiService: AuthApiService, private lsService: LocalStorageService, private jwtManagementService: JwtManagementService) {
    this.baseUrl = environment.baseUrl;
    this.authUrl = environment.authUrl;
    this.systemUrl = environment.systemUrl;
    this.umaMusumeUrl = environment.umaMusumeUrl;
    this.lsService.setInfo({ viewProject: this.systemUrl });
    this.authApiService.tokenUp().subscribe(s =>
      this.lsService.setInfo(s.loginItem as unknown as LocalStorageItem));
  }

  title = 'SystemControl';
}
