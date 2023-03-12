import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LocalStorageService } from '../../../../../dist/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  providers: [
    ApiService,
    LocalStorageService
  ]
})
export class LoginModule { }
