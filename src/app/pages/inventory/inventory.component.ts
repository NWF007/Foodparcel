import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.css"],
})
export class InventoryComponent implements OnInit {
  addForm = false;
  outForm = false;

  constructor() {}

  ngOnInit(): void {}

  displayForm() {
    this.addForm = !this.addForm;
  }

  displayOutForm() {
    this.outForm = !this.outForm;
  }
}
