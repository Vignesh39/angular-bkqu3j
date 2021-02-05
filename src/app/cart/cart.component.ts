import { Component, Inject, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  //items = this.cartService.getItems();
  items = [];
  checkoutForm = this.formBuilder.group({
    name: ["", Validators.required],
    address: ""
  });
  constructor(
    private cartService: CartService,
    @Inject(LOCAL_STORAGE) private storageService: StorageService,
    private route: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.items = this.storageService.get("myCart")
      ? this.storageService.get("myCart")
      : [];
  }

  notFound() {
    this.route.navigateByUrl("page-not-found");
  }

  error() {
    this.route.navigateByUrl("error");
  }

  internalError() {
    this.route.navigateByUrl("internal-server-error");
  }

  removeitem(productNmuber) {
    this.items.splice(productNmuber, 1);
    this.storageService.set("myCart", this.items);
    this.items = this.storageService.get("myCart");
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn("Your oder has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
