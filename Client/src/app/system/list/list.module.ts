import { CommonModule, JsonPipe } from '@angular/common';
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
    ApiService,
    JsonPipe
  ]
})
export class ListModule { }
