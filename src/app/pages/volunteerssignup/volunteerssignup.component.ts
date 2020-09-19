import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { NgForm } from "@angular/forms";
import { finalize } from "rxjs/operators";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-volunteerssignup",
  templateUrl: "./volunteerssignup.component.html",
  styleUrls: ["./volunteerssignup.component.css"],
})
export class VolunteerssignupComponent implements OnInit {
  listOfGender: Array<string> = ["Male", "Female", "Rather not say"];

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private db: AngularFireDatabase
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      gender,
    } = f.form.value;

    this.auth
      .signUp(email, password)
      .then((res) => {
        console.log(res);
        const { uid } = res.user;

        console.log("about to put details into db");
        this.db.object(`/volunteers/${uid}`).set({
          id: uid,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          gender: gender,
        });
      })
      .then(() => {
        console.log("managed to put into db");
        this.router.navigateByUrl("/volunteer");
        this.toastr.success("Successful signup");
      })
      .catch((err) => {
        console.log(err);
        this.toastr.error("Error signin up.");
      });
  }
}
