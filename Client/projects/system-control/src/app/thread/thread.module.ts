import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThreadRoutingModule} from './thread-routing.module';
import {TabIndexService} from "../services/tab-index/tab-index.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ThreadRoutingModule
  ]
})
export class ThreadModule {
  constructor(private tabIndexService: TabIndexService) {
    this.tabIndexService.setTabIndex(1);
  }
}
