import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from '../../models/product';
import { ProductService } from '../../../common/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
	product: Product[] ;
	productForm: FormGroup;
	errorMsg: string = '';
	successMsg: string = '';
  constructor(
  	private builder: FormBuilder,
  	private ProductService: ProductService
  ) { }

  ngOnInit() {
  this.productForm = this.builder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      sku: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      description: ['', [Validators.minLength(100), Validators.maxLength(200)]],
    })
  }

  add(){
  	this.product = {
  		'name' : this.loginForm.get('name').value,
  		'sku' :this.loginForm.get('sku').value,
  		'description' :this.loginForm.get('description').value,
  	}
  	this.products= this.ProductService.addProduct(this.product);
  	this.successMsg = "Product Added";
  }

}
