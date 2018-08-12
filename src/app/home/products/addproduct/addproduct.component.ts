import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
	productForm: FormGroup;
	errorMsg: string = '';
	successMsg: string = '';
  constructor(
  	private builder: FormBuilder,
  	private ProductService: ProductService,
  	private route: ActivatedRoute,
  	private router: Router,
  ) { }

  ngOnInit() {
	  this.productForm = this.builder.group({
	      name: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
	      sku: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
	      description: ['', [Validators.minLength(100), Validators.maxLength(200)]],
	    })	   
  }

  add(){
  	let productObject = {
  		'name' : this.productForm.get('name').value,
  		'sku' :this.productForm.get('sku').value,
  		'description' :this.productForm.get('description').value,
  	}
  	let response = this.ProductService.addProduct(productObject);
  	if(response === 'success'){
	    this.successMsg = "Product Added";
	    alert("Product Added")
  	 	
  	 	setTimeout(() => {
	  		this.router.navigate(['/products']);
		}, 1000);
  	}
  	else{
  		this.errorMsg = response;
  	}
  }

}
