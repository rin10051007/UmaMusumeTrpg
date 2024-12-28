import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {SysPermissionPipe, UmaMusumeTrpgPermissionPipe} from "Common";
import {ApiService as DetailApiService} from '../detail/services/api.service';
import {DeleteRoutingModule} from './delete-routing.module';
import {DeleteComponent} from './delete.component';
import {ApiService} from './services/api.service';


@NgModule({
  declarations: [
    DeleteComponent
  ],
  imports: [
    CommonModule,
    DeleteRoutingModule,
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
    ApiService,
    DetailApiService
  ]
})
export class DeleteModule {
}
