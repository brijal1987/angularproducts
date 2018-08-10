import { Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { Http, Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { Product } from '../models/product';
import { Products } from '../data/temp-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
	products: Product[] = Products ;
  constructor(private http: HttpClient) { }
  
  getProducts(){
	return this.products;  
  }
  
  addProduct(product){
	return this.products.push(product);
  }
  removeProduct(id){
	return this.products.splice(id,1);
  }
  /*
  removeProduct(id): Observable<any> {
    //service will call
  }
  */
  
}
