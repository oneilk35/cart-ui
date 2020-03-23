import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../cart.model';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  cart : Cart; 
  loading : boolean = true;
  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.loading = true;
    this.cartService.getCart(this.route.params['value'].id).subscribe((cart : Cart) => {
      console.log(this.cart);
      this.cart = cart;
      this.loading = false;
    });
  }

}
