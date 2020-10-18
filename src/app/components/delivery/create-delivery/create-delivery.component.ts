import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AuthService } from "src/app/services/auth.service";
import { ToastrService } from "ngx-toastr";
import { DatePipe } from "@angular/common";
import { v4 as uuidv4 } from "uuid";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-delivery",
  templateUrl: "./create-delivery.component.html",
  styleUrls: ["./create-delivery.component.css"],
})
export class CreateDeliveryComponent implements OnInit {
  user = null;
  quantity = null;
  longitude = null;
  latitude = null;

  form = false;

  listOfLocations: Array<string> = [
    "Cape Town",
    "Bellville",
    "Kraaifontein",
    "Atlantis",
  ];

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private auth: AuthService,
    public datepipe: DatePipe,
    private router: Router
  ) {
    auth.getUser().subscribe((user) => {
      this.db
        .object(`/applicants/${user.uid}`)
        .valueChanges()
        .subscribe((user) => {
          this.user = user;
          console.log(user);
        });
    });
  }

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const { quantity, location, deliveryDate } = f.form.value;
    if (location === "Cape Town") {
      this.latitude = -33.9249;
      this.longitude = 18.4241;
    }

    if (location === "Bellville") {
      this.latitude = -33.8943;
      this.longitude = 18.6294;
    }

    if (location === "Kraaifontein") {
      this.latitude = -33.8473;
      this.longitude = 18.7174;
    }

    if (location === "Atlantis") {
      this.latitude = -33.5063;
      this.longitude = 18.487;
    }

    const uid = uuidv4();
    this.db
      .object(`/delivery/${uid}`)
      .set({
        transactionId: uid,
        quantity: quantity,
        date: this.datepipe.transform(deliveryDate, "yyyy-MM-dd"),
        capturedBy: this.user.email,
        userId: this.user.id,
        location: location,
        latitude: this.latitude,
        longitude: this.longitude,
        isComplete: false,
        volunteerId: "  ",
      })
      .then(() => {
        this.toastr.success("Successfully added!");
      })
      .catch((err) => {
        this.toastr.error("Unsuccessful");
      });
  }
}
