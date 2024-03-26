import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {SysPermissionPipe, UmaMusumeTrpgPermissionPipe} from "Common";
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
    MatButtonModule,
    SysPermissionPipe,
    UmaMusumeTrpgPermissionPipe
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [
    ApiService
  ]
})
export class DetailModule {
}
