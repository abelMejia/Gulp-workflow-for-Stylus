import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';

const Routes = [
  {
     path: '',
     component: ProductComponent,
     title: 'Product'
  }
]

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
