import { Component } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItems';
import { TitleComponent } from '../../title/title.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from '../../not-found/not-found.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [TitleComponent, CommonModule, RouterLink, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  removeCartItem(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
