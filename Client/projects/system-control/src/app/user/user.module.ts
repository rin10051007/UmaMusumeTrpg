import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {TabIndexService} from "../services/tab-index/tab-index.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule {
  constructor(private tabIndexService: TabIndexService) {
    this.tabIndexService.setTabIndex(0);
  }
}
