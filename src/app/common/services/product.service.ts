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
  jsonproducts: Product[] = [] ;
  constructor(private http: HttpClient) { }
  
  getJsonProducts(){

    return this.http.get( './assets/data/products.json', {responseType: 'text'});
  }
  
  getProducts(){
	return this.products;  
  }
  
  getProductById(id){
    let productObj = [];
    this.products.forEach(obj => {
        if(obj.id == id){
          productObj.push(obj);
        }
    }); 

    return productObj;  
  }
  /*getProductById(id): Observable<Product> {
      //Call webservice
  }*/
  
  addProduct(product){
      for (let i in this.products) {
        /*if(this.products[i].name == product.name){
          return 'Product Name Exists!';
        }
        */
        if(this.products[i].sku == product.sku){
          return 'SKU Exists!';
        }
      }

      let id = 0;
      console.log(this.products.length)
      for (var index=0; index<this.products.length; index++) {
        if(index == (this.products.length -1)){
          id = this.products[index].id;
        }      
      }
     product.id = id + 1;
     this.products.push(product);
     return 'success';
  }
  
  updateProduct(product, id){

    for (let i in this.products) {
      /*if(this.products[i].id !== id && this.products[i].name == product.name){
        return 'Product Name Exists!';
      }*/
      if(this.products[i].id != id && this.products[i].sku == product.sku){
        return 'SKU Exists!';
      }
    }
    product.id = id;
    for (let index in this.products) {
      if(this.products[index].id == id){
        this.products[index] = product;
      }
    }
     return 'success'; 
  }
  removeProduct(id){
    let newArray = [];
    for (let index in this.products) {
      if(this.products[index].id == id){
      }
      else{
        newArray.push(this.products[index]);
      }
    }
    this.products = newArray;
	   return this.products;
  }
  /*
  removeProduct(id): Observable<any> {
    //service will call
  }
  */
  
}
