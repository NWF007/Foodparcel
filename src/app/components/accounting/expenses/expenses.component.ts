import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { Expenses } from "src/app/model/Expenses";

@Component({
  selector: "app-expenses",
  templateUrl: "./expenses.component.html",
  styleUrls: ["./expenses.component.css"],
})
export class ExpensesComponent implements OnInit {
  ELEMENT_DATA: Expenses[];

  expensesColumnNames: string[] = [
    "transactionId",
    "userId",
    "capturedBy",
    "quantity",
    "date",
    "price",
  ];

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllExpenses();
  }

  getAllExpenses() {
    this.db
      .object(`/parcelsIn`)
      .valueChanges()
      .subscribe((expense) => {
        if (expense) {
          this.ELEMENT_DATA = Object.values(expense);
          console.table(this.ELEMENT_DATA);
        } else {
          this.toastr.error("No donations found, sorry...");
          this.ELEMENT_DATA = [];
        }
      });
  }
}
