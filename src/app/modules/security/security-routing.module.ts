import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './general/change-password/change-password.component';
import { LoginComponent } from './general/login/login.component';
import { LogoutComponent } from './general/logout/logout.component';
import { ResetPasswordComponent } from './general/reset-password/reset-password.component';
import { RemoveUserComponent } from './users/remove-user/remove-user.component';
import { UserCreationComponent } from './users/user-creation/user-creation.component';
import { UserEditionComponent } from './users/user-edition/user-edition.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"logout",
    component: LogoutComponent
  },
  {
    path:"change-password",
    component: ChangePasswordComponent
  },
  {
    path:"reset-password",
    component: ResetPasswordComponent
  },
  {
    path:"user-creation",
    component: UserCreationComponent
  },
  {
    path:"user-edition",
    component: UserEditionComponent
  },
  {
    path:"user-list",
    component: UserListComponent
  },
  {
    path:"remove-user",
    component: RemoveUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
