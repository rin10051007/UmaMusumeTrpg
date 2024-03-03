import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  AuthApiService,
  BaseApiService,
  ErrorInterceptorProvider,
  HeaderMenuModule,
  JwtManagementService,
  LocalStorageService,
  TokenInterceptorProvider
} from 'Common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HeaderMenuModule
  ],
  providers: [
    BaseApiService,
    AuthApiService,
    LocalStorageService,
    JwtManagementService,
    TokenInterceptorProvider,
    ErrorInterceptorProvider
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
