import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { NgForm } from "@angular/forms";
import { finalize } from "rxjs/operators";
import { AngularFireDatabase } from "@angular/fire/database";
import { ToastrService } from "ngx-toastr";
import { DatePipe } from "@angular/common";

import { v4 as uuidv4 } from "uuid";
import { Router } from "@angular/router";

@Component({
  selector: "app-remove-parcels",
  templateUrl: "./remove-parcels.component.html",
  styleUrls: ["./remove-parcels.component.css"],
})
export class RemoveParcelsComponent implements OnInit {
  user = null;
  amount: number;
  email = null;
  userId;

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private auth: AuthService,
    private router: Router,
    public datepipe: DatePipe
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

  onSubmit() {
    const uid = uuidv4();

    this.db
      .object(`/parcelsOut/${uid}`)
      .set({
        transactionId: uid,
        amount: this.amount,
        date: this.datepipe.transform(Date.now(), "yyyy-MM-dd"),
        capturedBy: this.user.email,
        userId: this.user.id,
        delivered: false,
      })
      .then(() => {
        console.log(uid, this.email, this.amount, Date.now());
        this.toastr.success("Successfully send out for delivery!");
        this.amount = 0;
        // this.form = false;
        this.router.navigateByUrl("/admin/inventory");
      })
      .catch((err) => {
        this.toastr.error("Unsuccessful");
      });
  }
}
