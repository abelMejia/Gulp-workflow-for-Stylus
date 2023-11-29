import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './product.component';

const Routes = [
  {
     path: '',
     component: ProductComponent,
     title: 'Product',
     children: [
       {
          path: '',
          component: ProductListComponent,
          title: 'Product',
        },
        { 
          path: 'details/:id',
          component: ProductDetailsComponent,
          title: 'Details'
        },
     ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
