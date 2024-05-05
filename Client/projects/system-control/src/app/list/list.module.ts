import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule, MatGridTile} from "@angular/material/grid-list";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
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
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    MatSlideToggleModule,
    SysPermissionPipe,
    UmaMusumeTrpgPermissionPipe,
    SortDirectionPipe,
    MatButton,
    MatGridTile,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService,
  ]
})
export class ListModule {
}
