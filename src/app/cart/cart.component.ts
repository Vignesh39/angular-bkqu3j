import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit() {}

  notFound() {
    this.route.navigateByUrl("page-not-found");
  }

  error() {
    this.route.navigateByUrl("error");
  }

  internalError() {
    this.route.navigateByUrl("internal-server-error");
  }
}
