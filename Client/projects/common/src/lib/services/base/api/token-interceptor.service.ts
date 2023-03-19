import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../public-service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private jwtHelper: JwtHelperService, private lsService: LocalStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.lsService.getInfo().token;
    const newRequest = req.clone({
      headers: req.headers.set(
        'Authorization', `Bearer ${token}`
      )
    });
    return next.handle(newRequest)
  }

  tokenGetter(request?: HttpRequest<any>): string | null {
    return this.lsService.getInfo().token || null;
  }


}

export const TokenInterceptorProvider = { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true };
