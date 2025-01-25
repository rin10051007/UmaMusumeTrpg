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
