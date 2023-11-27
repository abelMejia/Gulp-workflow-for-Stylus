import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';

const Routes = [
  {
     path: '',
     component: CartComponent,
     title: 'Cart'
  }
]

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
