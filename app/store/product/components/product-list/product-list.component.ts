import { Component } from '@angular/core';
import * as data from './product'; 

export interface Product {
    name?: string;
    description?: string;
    id?: number;
}


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    products: Product[] = data.Products;
}
