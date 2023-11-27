import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const Routes = [
  {
     path: '',
     component: LoginComponent,
     title: 'Login'
  }
]

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }