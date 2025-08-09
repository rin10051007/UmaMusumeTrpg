import {Component} from '@angular/core';
import {environment, LocalStorageService, SystemRoute} from 'Common';
import {Router} from "@angular/router";
import {TabIndexService} from "./services/tab-index/tab-index.service";

@Component({
  selector: 'SystemControl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  protected readonly systemRoute = SystemRoute;

  constructor(private router: Router, private lsService: LocalStorageService, public tabIndexService: TabIndexService) {
    this.lsService.setViewProject({viewProject: environment.systemUrl});
  }

  onTabChange(index: number) {
    if (index !== this.tabIndexService.getTabIndex()) {
      this.tabIndexService.setTabIndex(index);
      this.router.navigate([this.systemRoute[index]]).then(() => {
      });
    }
  }
}
