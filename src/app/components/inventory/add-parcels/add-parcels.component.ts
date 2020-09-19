import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { NgForm } from "@angular/forms";
import { finalize } from "rxjs/operators";
import { AngularFireDatabase } from "@angular/fire/database";
import { ToastrService } from "ngx-toastr";

import { v4 as uuidv4 } from "uuid";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-parcels",
  templateUrl: "./add-parcels.component.html",
  styleUrls: ["./add-parcels.component.css"],
})
export class AddParcelsComponent implements OnInit {
  user = null;
  amount: number;
  email = null;
  userId;

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private auth: AuthService,
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

  onSubmit() {
    const uid = uuidv4();

    this.db
      .object(`/parcelsIn/${uid}`)
      .set({
        transactionId: uid,
        amount: this.amount,
        date: Date.now(),
        capturedBy: this.user.email,
        userId: this.user.id,
      })
      .then(() => {
        console.log(uid, this.email, this.amount, Date.now());
        this.toastr.success("Successfully added!");
        this.amount = 0;
        // this.form = false;
        this.router.navigateByUrl("/admin/inventory");
      })
      .catch((err) => {
        this.toastr.error("Unsuccessful");
      });
  }
}
