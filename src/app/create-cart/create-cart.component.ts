import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cart',
  templateUrl: './create-cart.component.html',
  styleUrls: ['./create-cart.component.css']
})
export class CreateCartComponent implements OnInit {

  user = {name: "Kevin O'Neill", shippingAddress: "Ireland", id: "USR-0001"}
  cartID : string;
  error : boolean = false;
  errorMessage : string;
  loading : boolean = false;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  createCart() {
    this.loading = true;
    console.log(this.cartID);
    let cart = {
      id: this.cartID,
      userID: this.user.id,
      userName: this.user.name,
      shippingAddress: this.user.shippingAddress,
      products: [],
      finalPrice: 0.0
    }
    this.cartService.createCart(cart).subscribe(res => {
      console.log("$$$$$$");
      this.router.navigate(['/shop/' + this.cartID]);
      
    }, err => {
      console.log(err);
      this.error = true;
      this.errorMessage = err.error.message;
      this.loading = false;
    });
  }

  isValid(){
    return this.cartID == ""
  }

}
