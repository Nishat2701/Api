import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [UserListComponent, UserAddComponent, UserEditComponent, UserProfileComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [UserListComponent, UserAddComponent, UserEditComponent,UserProfileComponent],
})
export class SharedModule {}
