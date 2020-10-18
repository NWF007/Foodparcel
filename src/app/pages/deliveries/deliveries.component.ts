import { Component, OnInit, Input } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { ToastrService } from "ngx-toastr";
import { Deliveries } from "src/app/model/Deliveries";
import { map } from "rxjs/operators";

@Component({
  selector: "app-deliveries",
  templateUrl: "./deliveries.component.html",
  styleUrls: ["./deliveries.component.css"],
})
export class DeliveriesComponent implements OnInit {
  // lat = -33.9249;
  lat = -33.6666;
  // lng = 18.4241;
  lng = 18.5812;
  zoom = 10;
  today = Date.now();

  deliveries: Deliveries[] = [];

  constructor(private db: AngularFireDatabase, private toastr: ToastrService) {}

  async ngOnInit(): Promise<void> {
    await this.getAllDeliveries();
  }

  getAllDeliveries() {
    this.db
      .object(`/delivery`)
      .valueChanges()
      .subscribe((delivery: Deliveries) => {
        if (delivery) {
          this.deliveries = Object.values(delivery);
          console.log(this.deliveries);
        } else {
          this.toastr.error("No donations found, sorry...");
          this.deliveries = [];
          console.log("Nothing found");
        }
      });
  }
}
