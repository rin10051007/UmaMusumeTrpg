import {NgModule} from "@angular/core";
import {CommonModule, DatePipe} from "@angular/common";
import {DetailComponent} from "./detail.component";
import {DetailRoutingModule} from "./detail-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {ApiService} from "./services/api.service";
import {ResponseApiService, Search} from "Common";
import {MatPaginator} from "@angular/material/paginator";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";


@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatPaginator,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect
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
    ResponseApiService,
    Search,
    DatePipe
  ]
})
export class DetailModule {
}
