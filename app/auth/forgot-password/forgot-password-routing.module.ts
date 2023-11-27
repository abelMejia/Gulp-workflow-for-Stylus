import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password.component';

const Routes = [
  {
     path: '',
     component: ForgotPasswordComponent,
     title: 'Forgot Password'
  }
]

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class ForgotPasswordRoutingModule { }