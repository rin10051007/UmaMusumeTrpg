import { Component } from '@angular/core';
import { environment, LocalStorageService } from 'Common';

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

  constructor(private lsService: LocalStorageService) {
    this.systemUrl = environment.systemUrl;
    this.lsService.setViewProject({ viewProject: this.systemUrl });
  }
}
