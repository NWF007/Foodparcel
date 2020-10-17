import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { Deliveries } from "src/app/model/Deliveries";

@Component({
  selector: "app-view-deliveries",
  templateUrl: "./view-deliveries.component.html",
  styleUrls: ["./view-deliveries.component.css"],
})
export class ViewDeliveriesComponent implements OnInit {
  ELEMENT_DATA: Deliveries[];

  deliveriesColumnNames: string[] = [
    "transactionId",
    "userId",
    "date",
    "capturedBy",
    "quantity",
    "location",
  ];

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllDeliveries();
  }

  getAllDeliveries() {
    this.db
      .object(`/delivery`)
      .valueChanges()
      .subscribe((delivery) => {
        if (delivery) {
          this.ELEMENT_DATA = Object.values(delivery);
          console.table(this.ELEMENT_DATA);
        } else {
          this.toastr.error("No deliveries found, sorry...");
          this.ELEMENT_DATA = [];
        }
      });
  }
}
