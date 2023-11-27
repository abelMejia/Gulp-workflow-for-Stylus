import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

const Routes = [
  {
     path: '',
     component: CheckoutComponent,
     title: 'Checkout'
  }
]

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
