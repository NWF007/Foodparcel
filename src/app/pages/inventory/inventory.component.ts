import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.css"],
})
export class InventoryComponent implements OnInit {
  form = false;

  constructor() {}

  ngOnInit(): void {}

  displayForm() {
    this.form = !this.form;
  }
}
