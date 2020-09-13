import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/services/auth.service";
import { NgForm } from "@angular/forms";
import { AngularFireDatabase } from "@angular/fire/database";
import { finalize } from "rxjs/operators";

import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-applysignup",
  templateUrl: "./applysignup.component.html",
  styleUrls: ["./applysignup.component.css"],
})
export class ApplysignupComponent implements OnInit {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private auth: AuthService,
    private db: AngularFireDatabase
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      address,
      annualIncome,
    } = f.form.value;

    this.auth
      .signUp(email, password)
      .then((res) => {
        console.log(res);

        const { uid } = res.user;

        console.log("about to put details into db");
        this.db.object(`/applicants/${uid}/`).set({
          id: uid,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          address: address,
          annualIncome: annualIncome,
          qualify: false,
        });
      })
      .then(() => {
        console.log("managed to put into db");
        this.router.navigateByUrl("/apply");
        this.toastr.success("Successful signup");
      })
      .catch((err) => {
        console.log(err);
        this.toastr.error("Error signin up.");
      });
  }
}
