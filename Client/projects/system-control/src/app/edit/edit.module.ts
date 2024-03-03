import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ApiService as DetailApiService} from '../detail/services/api.service';
import {EditRoutingModule} from './edit-routing.module';
import {EditComponent} from './edit.component';
import {ApiService} from './services/api.service';


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
export class EditModule {
}
