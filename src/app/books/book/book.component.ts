import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/cart/cart.service';

import { Book } from 'src/app/types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input()
  book: Book = {} as Book;

  isInCart: boolean = false;

  @Output()
  emitBook = new EventEmitter<Book>();

  constructor(private cartService: CartService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  addToCart() {
    if(!this.authService.isAuthenticated) {
      this.router.navigate(['login']);
    }
    this.isInCart = true;
    this.cartService.add(this.book);
    this.emitBook.emit(this.book);
  }
  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
    this.emitBook.emit();
  }
}
