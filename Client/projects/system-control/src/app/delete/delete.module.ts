import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApiService as DetailApiService } from '../detail/services/api.service';
import { DeleteRoutingModule } from './delete-routing.module';
import { DeleteComponent } from './delete.component';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    DeleteComponent
  ],
  imports: [
    CommonModule,
    DeleteRoutingModule
  ],
  providers: [
    ApiService,
    DetailApiService
  ]
})
export class DeleteModule {
}
