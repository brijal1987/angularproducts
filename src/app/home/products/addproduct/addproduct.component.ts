import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from '../../../common/models/product';
import { ProductService } from '../../../common/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
	product: Product[] = [];
	products: Product[] = [];
	productForm: FormGroup;
	errorMsg: string = '';
	successMsg: string = '';
  constructor(
  	private builder: FormBuilder,
  	private ProductService: ProductService,
  	private route: ActivatedRoute,
  ) { }

  ngOnInit() {
	  this.productForm = this.builder.group({
	      name: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
	      sku: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
	      description: ['', [Validators.minLength(100), Validators.maxLength(200)]],
	    })
	   const id = this.route.snapshot.paramMap.get('id');

	   this.product = this.ProductService.getProductById(id);
	   console.log(this.product )
	   /*.subscribe(data => {
	      this.product = data;      
	    })
	    */
  }

  add(id){
  	let productObject = {
  		'id': this.products.length+1,
  		'name' : this.productForm.get('name').value,
  		'sku' :this.productForm.get('sku').value,
  		'description' :this.productForm.get('description').value,
  	}
  	this.products = this.ProductService.addProduct(productObject);
  	this.successMsg = "Product Added";
  }

}
