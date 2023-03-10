import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
  { path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) },
  { path: 'entry', loadChildren: () => import('./entry/entry.module').then(m => m.EntryModule) },
  { path: 'edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule) },
  { path: 'delete', loadChildren: () => import('./delete/delete.module').then(m => m.DeleteModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
