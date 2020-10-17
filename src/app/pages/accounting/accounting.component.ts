import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-accounting",
  templateUrl: "./accounting.component.html",
  styleUrls: ["./accounting.component.css"],
})
export class AccountingComponent implements OnInit {
  donations = false;
  donors = false;
  expenses = false;

  constructor() {}

  ngOnInit(): void {}

  showDonations() {
    this.donations = !this.donations;
  }

  showDonors() {
    this.donors = !this.donors;
  }

  showExpenses() {
    this.expenses = !this.expenses;
  }
}
