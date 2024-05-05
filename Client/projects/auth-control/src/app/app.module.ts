import {HttpClientModule} from '@angular/common/http';
import {LOCALE_ID, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ErrorInterceptorProvider, TokenInterceptorProvider} from 'Common';
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
    ReactiveFormsModule,
  ],
  providers: [
    TokenInterceptorProvider,
    ErrorInterceptorProvider,
    {provide: LOCALE_ID, useValue: 'ja-JP'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
