import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BooksService } from '../services/books.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.css']
})
export class BookCartComponent implements OnInit {

  items;

  constructor(private route: ActivatedRoute, private bookShopService: BooksService,
  	private cartService: CartService) {

  	this.items = this.cartService.getItems();

  }

  ngOnInit() {
  }

  clearToCart(product) {
    // window.alert('Your product has been remove to the cart!');
    this.cartService.removeBook(product);
  }

  getTotal(product){
    let total = 0;
    for (var i = 0; i < product.length; i++) {
        if (product[i]) {
            total += product[i];
        }
    }
    return total;
  }

}
