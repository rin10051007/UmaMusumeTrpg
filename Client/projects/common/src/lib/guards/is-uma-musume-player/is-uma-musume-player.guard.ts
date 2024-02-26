import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthorityConfApiService } from '../../services/public-service';

@Injectable()
export class IsUmaMusumePlayerGuard {
  constructor(private authorityConfApiService: AuthorityConfApiService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authorityConfApiService.isUmaMusumePlayer().pipe(
      map((r => {
        return r.isAllows;
      })));
  }
}
