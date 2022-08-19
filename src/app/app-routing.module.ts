import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './shared/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
