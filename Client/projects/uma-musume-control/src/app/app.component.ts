import {Component} from '@angular/core';
import {AuthApiService, environment, LocalStorageService, LocalStorageToken} from 'Common';

@Component({
    selector: 'UmaMusumeControl-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  baseUrl!: string;
  authUrl!: string;
  systemUrl!: string;
  umaMusumeUrl!: string;
  title = 'UmaMusumeControl';

  constructor(private authApiService: AuthApiService, private lsService: LocalStorageService) {
    this.baseUrl = environment.baseUrl;
    this.authUrl = environment.authUrl;
    this.systemUrl = environment.systemUrl;
    this.umaMusumeUrl = environment.umaMusumeUrl;
    this.lsService.setViewProject({viewProject: this.umaMusumeUrl});
    this.authApiService.tokenUp().subscribe(s =>
      this.lsService.setToken(s.loginItem as unknown as LocalStorageToken), () =>
      window.location.href = `${this.baseUrl}${this.authUrl}`
    );
  }
}
