import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {  AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './products/product/product.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopComponent } from './shop/shop.component';
import { CartService } from './cart.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    NavbarComponent,
    ProductComponent,
    CartItemComponent,
    CheckoutComponent,
    CreateCartComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
