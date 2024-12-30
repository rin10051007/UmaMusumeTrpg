import {registerLocaleData} from "@angular/common";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import localeJa from '@angular/common/locales/ja';
import {LOCALE_ID, NgModule} from '@angular/core';
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
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";

registerLocaleData(localeJa);

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent,
    ], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        HeaderMenuModule,
        MatTabGroup,
        MatTab,
        MatTabLabel], providers: [
        BaseApiService,
        AuthApiService,
        LocalStorageService,
        JwtManagementService,
        TokenInterceptorProvider,
        ErrorInterceptorProvider,
        { provide: LOCALE_ID, useValue: 'ja-JP' },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule {
}
