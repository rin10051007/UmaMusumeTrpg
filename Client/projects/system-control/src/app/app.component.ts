import {Component} from '@angular/core';
import {AuthApiService, environment, LocalStorageService, LocalStorageToken} from 'Common';

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

  constructor(private authApiService: AuthApiService, private lsService: LocalStorageService) {
    this.systemUrl = environment.systemUrl;
    this.lsService.setViewProject({viewProject: this.systemUrl});
    this.authApiService.tokenUp().subscribe((s: { loginItem: unknown; }) =>
      this.lsService.setToken(s.loginItem as unknown as LocalStorageToken));
  }
}
