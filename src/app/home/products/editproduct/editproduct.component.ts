import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from '../../../common/models/product';
import { ProductService } from '../../../common/services/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
	product: Product[] = [];
	products: Product[] = [];
	productEditForm: FormGroup;
	errorMsg: string = '';
	successMsg: string = '';
  constructor(
  	private builder: FormBuilder,
  	private ProductService: ProductService,
  	private route: ActivatedRoute,
  	private router: Router,
  ) { }

  ngOnInit() {


	    const id = this.route.snapshot.paramMap.get('id');

	   this.product = this.ProductService.getProductById(id);
	   console.log(this.product )
	   /*.subscribe(data => {
	      this.product = data;      
	    })
	    */

  		this.productEditForm = this.builder.group({
	      name: [this.product[0].name, Validators.compose([Validators.required, Validators.maxLength(100)])],
	      sku: [this.product[0].sku, Validators.compose([Validators.required, Validators.maxLength(100)])],
	      description: [this.product[0].description, [Validators.minLength(100), Validators.maxLength(200)]],
	    })
  }

  edit(){
  	const id = this.route.snapshot.paramMap.get('id');
  	let productObject = {
  		'name' : this.productEditForm.get('name').value,
  		'sku' :this.productEditForm.get('sku').value,
  		'description' :this.productEditForm.get('description').value,
  	}
  	let response = this.ProductService.updateProduct(productObject, id);

  	if(response === 'success'){
	  	this.successMsg = "Product Updated";
	  	this.router.navigate(['/products']);
  	}
  	else{
  		this.errorMsg = response;
  	}

  }

}
