import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    CommonModule,
    EntryRoutingModule
  ],
  providers: [
    ApiService
  ]
})
export class EntryModule { }
