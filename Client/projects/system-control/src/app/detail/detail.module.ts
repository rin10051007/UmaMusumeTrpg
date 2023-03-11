import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { ApiService } from './servises/api.service';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ],
  providers: [
    ApiService
  ]
})
export class DetailModule { }
