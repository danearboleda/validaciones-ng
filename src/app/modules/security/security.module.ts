import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './general/login/login.component';
import { LogoutComponent } from './general/logout/logout.component';
import { ChangePasswordComponent } from './general/change-password/change-password.component';
import { ResetPasswordComponent } from './general/reset-password/reset-password.component';
import { UserCreationComponent } from './users/user-creation/user-creation.component';
import { UserEditionComponent } from './users/user-edition/user-edition.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { RemoveUserComponent } from './users/remove-user/remove-user.component';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    UserCreationComponent,
    UserEditionComponent,
    UserListComponent,
    RemoveUserComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
