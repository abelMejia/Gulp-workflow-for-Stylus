import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

const Routes = [
  {
     path: '',
     component: RegisterComponent,
     title: 'Register'
  }
]

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }