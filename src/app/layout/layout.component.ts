import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isVisible: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  showItems() {
    this.isVisible = !this.isVisible;
  }

  getCart() {
    return this.cartService.get();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logout();
  }
}
