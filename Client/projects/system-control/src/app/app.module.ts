import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthApiService, BaseApiService, ErrorInterceptorProvider, JwtManagementService, LeftMenuComponent, LeftMenuModule, LocalStorageService, TokenInterceptorProvider } from '../../../../dist/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent
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
