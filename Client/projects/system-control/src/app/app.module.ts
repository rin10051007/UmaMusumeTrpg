import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthApiService, BaseApiService, LocalStorageService } from '../../../../dist/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    BaseApiService,
    AuthApiService,
    LocalStorageService,
    JwtHelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
