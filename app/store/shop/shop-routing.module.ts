import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';

const Routes = [
  {
     path: '',
     component: ShopComponent,
     title: 'Shop'
  }
]

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
