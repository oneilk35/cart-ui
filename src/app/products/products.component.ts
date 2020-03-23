import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] = [
    {name : "Macbook Pro", id: "fhtwyhrgesgs$fdsgsg", shippedFrom : "China", price: 2500, imgSrc: "assets/macbook.jpeg"},
    {name : "Samsung TV", id: "dfgdfGFGEfqw232!", shippedFrom : "China", price: 500, imgSrc: "assets/samsung.jpeg"},
    {name : "Nikon Camera", id: "opyutg2q3rhy&8", shippedFrom : "China", price: 800, imgSrc: "assets/nikon.jpeg"},
    {name : "Playstation", id: "fthjytuik76iejyw45%$wef", shippedFrom : "China", price: 300, imgSrc: "assets/playstation.jpeg"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
