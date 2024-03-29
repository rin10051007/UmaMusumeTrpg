import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeleteComponent} from './delete.component';

const routes: Routes = [{path: ':id', component: DeleteComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteRoutingModule {
}
