import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthApiService, BaseApiService, LocalStorageService, TokenInterceptorProvider } from '../../../../dist/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BaseApiService,
    AuthApiService,
    LocalStorageService,
    TokenInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
