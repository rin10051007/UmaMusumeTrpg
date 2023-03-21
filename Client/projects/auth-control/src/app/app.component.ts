import { Component } from '@angular/core';
import { environment } from '../../../../dist/common';

@Component({
  selector: 'AuthControl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseUrl!: string;
  authUrl!: string;
  systemUrl!: string;
  umaMusumeUrl!: string;
  constructor() {
    this.baseUrl = environment.baseUrl;
    this.authUrl = environment.authUrl;
    this.systemUrl = environment.systemUrl;
    this.umaMusumeUrl = environment.umaMusumeUrl;
  }
  title = 'AuthControl';
}
