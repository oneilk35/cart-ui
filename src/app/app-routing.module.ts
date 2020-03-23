import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Route } from '@angular/compiler/src/core';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { ShopComponent } from './shop/shop.component';


const appRoutes : Routes = [
  {path: '', redirectTo: '/create-cart', pathMatch: 'full'},
  {path: 'create-cart', component: CreateCartComponent},
  {path: 'shop/:id', component: ShopComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }