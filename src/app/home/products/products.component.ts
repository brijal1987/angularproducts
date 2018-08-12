import { Component, OnInit } from '@angular/core';

import { Product } from '../../common/models/product';
import { ProductService } from '../../common/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  	products: Product[] = [];
	errorMsg: string = '';
	successMsg: string = '';
  constructor(private ProductService: ProductService) { }
  ngOnInit() {
  	this.products= this.ProductService.getProducts();
  	
  }
  remove(id) {
    let confirmed = confirm('Are you sure?');

    if(confirmed) {
    	console.log(id)
  		this.products= this.ProductService.removeProduct(id);

		this.successMsg = "Product Deleted";
    }    
  }


}
