import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const Routes = [
  {
     path: 'login',
     loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
      path: 'register',
      loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
      path: 'forgot-password',
      loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
