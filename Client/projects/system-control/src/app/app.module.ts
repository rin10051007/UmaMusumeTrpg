import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthApiService, BaseApiService, ErrorInterceptorProvider, JwtManagementService, LeftMenuModule, LocalStorageService, TokenInterceptorProvider } from 'common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeftMenuModule
  ],
  providers: [
    BaseApiService,
    AuthApiService,
    LocalStorageService,
    JwtManagementService,
    TokenInterceptorProvider,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
