import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {SysPermissionPipe} from "../../../../common/src/lib/pipes/sys-permission/sys-permission.pipe";
import {
  UmaMusumeTrpgPermissionPipe
} from "../../../../common/src/lib/pipes/uma-musume-trpg-permission/uma-musume-trpg-permission.pipe";
import {DetailRoutingModule} from './detail-routing.module';
import {DetailComponent} from './detail.component';
import {ApiService} from './services/api.service';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    SysPermissionPipe,
    UmaMusumeTrpgPermissionPipe
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [
    ApiService
  ]
})
export class DetailModule {
}
