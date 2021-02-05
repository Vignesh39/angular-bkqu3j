import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable()
export class CartService {
  items = [];
  constructor(
    @Inject(LOCAL_STORAGE) private storageService: StorageService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.items = this.storageService.get("myCart")
      ? this.storageService.get("myCart")
      : [];
  }

  addToCart(product) {
    this.items.push(product);
    this.storageService.set("myCart", this.items);
  }
  getItems() {
    this.storageService.get("myCart");
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.storageService.remove("myCart");
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
