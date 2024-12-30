import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorityConfApiService, IsSysPermissionToAdminGuard} from 'Common';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [IsSysPermissionToAdminGuard]
  },
  {
    path: 'thread',
    loadChildren: () => import('./thread/thread.module').then(m => m.ThreadModule),
    canActivate: [IsSysPermissionToAdminGuard]
  },
  {path: '**', redirectTo: 'user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthorityConfApiService,
    IsSysPermissionToAdminGuard
  ]
})
export class AppRoutingModule {
}
