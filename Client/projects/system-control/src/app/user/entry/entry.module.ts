import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {IsLoginIdDuplicateApiService, SysPermissionPipe, UmaMusumeTrpgPermissionPipe} from "Common";
import {EntryRoutingModule} from "./entry-routing.module";
import {EntryComponent} from './entry.component';
import {Entry} from "./forms/entry.form";
import {ApiService} from './services/api.service';

@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    CommonModule,
    EntryRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SysPermissionPipe,
    UmaMusumeTrpgPermissionPipe
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    IsLoginIdDuplicateApiService,
    Entry
  ]
})
export class EntryModule {
}
