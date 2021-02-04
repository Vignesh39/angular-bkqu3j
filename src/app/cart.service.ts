import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CartService {
  items = [];
  constructor(private httpClient: HttpClient) {}

  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrice() {
    const arr = [
      {
        type: "Overnight",
        price: 25.99
      },
      {
        type: "2-Day",
        price: 9.99
      },
      {
        type: "Postal",
        price: 2.99
      }
    ];
    return arr;
    //return this.httpClient.get("./assets/shipping.json");
  }
}
