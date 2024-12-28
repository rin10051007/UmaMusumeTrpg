import {CommonModule, DatePipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatGridListModule, MatGridTile} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTableModule} from "@angular/material/table";
import {SortDirectionPipe, SysPermissionPipe, UmaMusumeTrpgPermissionPipe} from "Common";
import {Search} from "./forms/search.form";

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
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    SysPermissionPipe,
    MatButton,
    MatGridTile,
    FormsModule,
    ReactiveFormsModule,
    UmaMusumeTrpgPermissionPipe,
    SortDirectionPipe
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService,
    Search,
    DatePipe
  ]
})
export class ListModule {
}
