import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const Routes = [
  {
     path: 'cart',
     loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
      path: 'shop',
      loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  },
  {
      path: 'product',
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
      path: 'checkout',
      loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
