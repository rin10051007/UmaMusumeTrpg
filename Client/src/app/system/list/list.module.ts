import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ],
  providers: [
    ApiService
  ]
})
export class ListModule { }
