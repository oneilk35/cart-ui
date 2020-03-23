import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product : Product;
  cartID : string;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {

  }

  addToCart(){
    this.cartService.addProductToCart(this.product, this.route.params['value'].id).subscribe(res => {
      console.log(res);
    });
  }

}
