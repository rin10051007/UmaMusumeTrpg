import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatGridTile} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {SortDirectionPipe, SysPermissionPipe, UmaMusumeTrpgPermissionPipe} from "Common";

import {ListRoutingModule} from './list-routing.module';
import {ListComponent} from './list.component';
import {ApiService} from './services/api.service';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatTableModule,
    SysPermissionPipe,
    UmaMusumeTrpgPermissionPipe,
    SortDirectionPipe,
    MatButton,
    MatGridTile
  ],
  exports: [
    MatTableModule
  ],
  providers: [
    ApiService,
  ]
})
export class ListModule {
}
