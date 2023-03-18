import { Component } from '@angular/core';
import { AuthApiService, Item, LocalStorageService } from '../../../../dist/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'SystemControl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseUrl!: string;
  constructor(private authApiService: AuthApiService, private lsService: LocalStorageService) {
    this.baseUrl = environment.baseUrl;
    this.authApiService.tokenUp().subscribe(s =>
      this.lsService.setInfo(s.loginItem as unknown as Item)
      , () =>
        window.location.href = `${this.baseUrl}AuthControl`
    );
  }

  title = 'SystemControl';
}
