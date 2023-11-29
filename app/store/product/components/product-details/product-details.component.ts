import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from './../product-list/product'; 
import { Product } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
    currentProduct: Product | undefined = {}
    constructor(private route: ActivatedRoute) {
        const id = this.route.snapshot.paramMap.get('id');
        this.currentProduct = data.Products.find(it => Number(it.id) === Number(id))
    }
}
