import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../public-lib';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          window.location.href = `${environment.baseUrl}${environment.authUrl}`
        }
        return throwError(error);
      }));
  }
}

export const ErrorInterceptorProvider = { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true };
