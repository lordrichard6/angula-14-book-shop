import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../types/Book';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input()
  book: Book = {} as Book;

  @Output()
  emitBook = new EventEmitter<Book>();
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log(this.getCart())
  }

  getCart() {
    return this.cartService.get();
  }
  removeFromCart() {
    this.cartService.remove(this.book);
    this.emitBook.emit();
  }
}
