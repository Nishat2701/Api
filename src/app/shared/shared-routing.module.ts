import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'add',
    component: UserAddComponent,
  },
  {
    path: 'user-list',
    component: UserListComponent,
  },

  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full',
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent,
  },
  {
    path: 'user-profile/:id',
    component: UserProfileComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
