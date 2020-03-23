import { Product } from './product.model';

export interface Cart {
    id : string,
    userID : string,
    userName : string,
    shippingAddress : string,
    products : Product[],
    finalPrice : number
  }