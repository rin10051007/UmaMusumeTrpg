import {Component} from '@angular/core';
import {environment, LocalStorageService, SystemRoute, SystemRouteMap} from 'Common';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'SystemControl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  selectedTabIndex = 0;
  protected readonly systemRouteMap = SystemRouteMap;
  protected readonly systemRoute = SystemRoute;

  constructor(private route: ActivatedRoute, private router: Router, private lsService: LocalStorageService) {
    this.lsService.setViewProject({viewProject: environment.systemUrl});
    const currentRoute = window.location.href.split('/')[4]
    this.selectedTabIndex = this.systemRouteMap[currentRoute] || 0;
  }

  onTabChange(index: number) {
    this.router.navigate([this.systemRoute[index]]).then(() => {
    });
  }
}
