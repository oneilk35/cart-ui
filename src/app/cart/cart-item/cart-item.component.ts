import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/snack-bar/snack-bar.component';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item : any;
  cartID : string;
  constructor(private route: ActivatedRoute, private cartService: CartService, private flashMessage: FlashMessagesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.item);
    this.cartID = this.route.params['value'].id
  }

  removeProduct(){
    this.cartService.removeProduct(this.item, this.cartID).subscribe(res => {
      this.showFlashMessage("IngestionResult: ProductRemoved", "Message: Successfully Removed Product", true);   
    }, err => {
      this.showFlashMessage("IngestionResult: " + err.error.code,  "Message: " + err.error.message, false);
    });
  }

  increaseProductQty(){
    this.cartService.increaseProductQty(this.item, this.cartID).subscribe(res => {
      this.showFlashMessage("IngestionResult: ProductQtyIncreased", "Message: Successfully Increased Qty", true);   
    }, err => {
      this.showFlashMessage("IngestionResult: " + err.error.code,  "Message: " + err.error.message, false);
    });
  }

  decreaseProductQty(){
    this.cartService.decreaseProductQty(this.item, this.cartID).subscribe(res => {
      this.showFlashMessage("IngestionResult: ProductQtyDecreased", "Message: Successfully decreased qty", true);   
    }, err => {
      this.showFlashMessage("IngestionResult: " + err.error.code,  "Message: " + err.error.message, false);
    });
  }

  showFlashMessage(ingestionResult: string, message: string, success: boolean){
    this._snackBar.openFromComponent(SnackBarComponent , {
      verticalPosition: 'top',
      duration:  3000,
      data: {
        ingestion: ingestionResult,
        message: message,
        success: success
      },
    }); 
  }

}
