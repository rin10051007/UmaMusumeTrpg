import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorityConfApiService, IsSysPermissionToAdminGuard } from 'Common';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListModule),
    canActivate: [IsSysPermissionToAdminGuard]
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule),
    canActivate: [IsSysPermissionToAdminGuard]
  },
  {
    path: 'entry',
    loadChildren: () => import('./entry/entry.module').then(m => m.EntryModule),
    canActivate: [IsSysPermissionToAdminGuard]
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then(m => m.EditModule),
    canActivate: [IsSysPermissionToAdminGuard]
  },
  {
    path: 'delete',
    loadChildren: () => import('./delete/delete.module').then(m => m.DeleteModule),
    canActivate: [IsSysPermissionToAdminGuard]
  },
  { path: '**', redirectTo: 'list', pathMatch: 'full' }
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
