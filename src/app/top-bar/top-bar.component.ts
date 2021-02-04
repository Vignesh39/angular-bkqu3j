import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {
  date;
  toggle: boolean = true;
  constructor() {}

  ngOnInit() {
    this.date = Date.now();
  }

  format() {
    return this.toggle ? "shortDate" : "fullDate";
  }

  myToggleFormat() {
    this.toggle = !this.toggle;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
