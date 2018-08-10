import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { ProductService } from '../../common/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	
  products: Product[] ;
  constructor(private ProductService: ProductService) { }
  ngOnInit() {
  	this.products= this.ProductService.getProducts();
  	 console.log(this.products)
  }
  remove(id) {
    let confirmed = confirm('Are you sure?');

    if(confirmed) {
      this.products= this.ProductService.removeProduct(id);
    }    
  }


}
