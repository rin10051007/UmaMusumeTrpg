import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { ApiService } from './services/api.service';
import { ApiService as DetailApiService } from '../detail/services/api.service';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule
  ],
  providers: [
    ApiService,
    DetailApiService
  ]
})
export class EditModule { }
