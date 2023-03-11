import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'SystemControl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseUrl!: string;
  constructor() {
    this.baseUrl = environment.baseUrl;
  }

  title = 'SystemControl';
}
