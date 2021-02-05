import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: ["", Validators.required],
    address: ""
  });
  constructor(
    private cartService: CartService,
    private route: Router,
    private formBuilder: FormBuilder
  ) {}

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

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn("Your oder has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
