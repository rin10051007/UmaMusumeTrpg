import {Component} from '@angular/core';
import {SystemRoute,SystemRouteMap,environment, LocalStorageService} from 'Common';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'SystemControl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected readonly systemRouteMap=SystemRouteMap;
  protected readonly systemRoute=SystemRoute;
  selectedTabIndex = 0;

  constructor(private route: ActivatedRoute, private router: Router,private lsService: LocalStorageService) {
    this.lsService.setViewProject({viewProject: environment.systemUrl});
    const currentRoute = window.location.href.split('/')[4]
    this.selectedTabIndex = this.systemRouteMap[currentRoute] || 0;
    console.log(this.selectedTabIndex);
  }

  onTabChange(index: number) {
    this.router.navigate([this.systemRoute[index]]).then(() => {
    });
  }
}
