import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthApiService, BaseApiService, LocalStorageService } from '../../../../../dist/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  providers: [
    BaseApiService,
    AuthApiService,
    LocalStorageService
  ]
})
export class LoginModule { }
