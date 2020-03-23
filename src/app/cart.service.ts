import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Cart } from './cart.model';


@Injectable({
  providedIn: 'root'
})


export class CartService {

  constructor(private http: HttpClient) { }

  cart : Cart;

  getCart(cartID : string){
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://localhost:5001',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    };
    return this.http.get('https://localhost:5001/api/getCart/' + cartID, { headers });
  }

  createCart(cartCreated){
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://localhost:5001',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    };
    return this.http.post('https://localhost:5001/api/cartCreated', cartCreated, { headers });
  }

  addProductToCart(product: Product, cartID: string){
    let productAdded = {
      cartID: cartID,
      product: {
        id : product.id,
        qty : 1,
        name : product.name,
        price : product.price,
        countryOfOrigin : product.shippedFrom  
      }
    }
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://localhost:5001',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    };
    return this.http.put('https://localhost:5001/api/productAdded', productAdded, { headers });
  }

  removeProduct(product: Product, cartID: string){
    let productRemoved = {
      cartID: cartID,
      product: {
        id : product.id,
        qty : 1,
        name : product.name,
        price : product.price,
        countryOfOrigin : product.shippedFrom  
      }
    }
    console.log(productRemoved);
    
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://localhost:5001',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    };
    return this.http.put('https://localhost:5001/api/productRemoved', productRemoved, { headers });
  }

  increaseProductQty(product: Product, cartID: string){
    let productQtyIncreased = {
      cartID: cartID,
      product: {
        id : product.id,
        qty : 1,
        name : product.name,
        price : product.price,
        countryOfOrigin : product.shippedFrom  
      }
    }
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://localhost:5001',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    };
    return this.http.put('https://localhost:5001/api/productQtyIncreased/', productQtyIncreased, { headers });
  }

  decreaseProductQty(product: Product, cartID: string){
    let producQtyDecreased = {
      cartID: cartID,
      product: {
        id : product.id,
        qty : 1,
        name : product.name,
        price : product.price,
        countryOfOrigin : product.shippedFrom  
      }
    }
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://localhost:5001',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    };
    return this.http.put('https://localhost:5001/api/productQtyDecreased', producQtyDecreased, { headers });
  }

  clearCart(cartID : string){
    let cartCleared = {
      cartID: cartID,
      products: [],
      finalPrice: 0.0
    }
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://localhost:5001',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    };
    return this.http.put('https://localhost:5001/api/cartCleared', cartCleared, { headers });

  }

  applyCoupon(couponDiscount: number, cartID: string){
    let couponApplied = {
      cartID: cartID, 
      promoCoupon: {
        isApplied: true,
        percentageDiscount: couponDiscount
      }
    }
  }

  checkout(cartID : string){

  }

}