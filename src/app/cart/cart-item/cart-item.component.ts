import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item : any;
  cartID : string;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.item);
    this.cartID = this.route.params['value'].id
  }

  removeProduct(){
    this.cartService.removeProduct(this.item, this.cartID).subscribe(res => {
      console.log(res);
    });
  }

  increaseProductQty(){
    this.cartService.increaseProductQty(this.item, this.cartID).subscribe(res => {
      console.log(res);
    });
  }

  decreaseProductQty(){
    this.cartService.decreaseProductQty(this.item, this.cartID).subscribe(res => {
      console.log(res);
    });
  }

}
