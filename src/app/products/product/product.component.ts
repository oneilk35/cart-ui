import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/snack-bar/snack-bar.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product : Product;
  cartID : string;
  constructor(private route: ActivatedRoute, private cartService: CartService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  addToCart(){
    this.cartService.addProductToCart(this.product, this.route.params['value'].id).subscribe(res => {
      this.showFlashMessage("IngestionResult: ProductAdded", "Message: Successfully Added Product", true);   
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
