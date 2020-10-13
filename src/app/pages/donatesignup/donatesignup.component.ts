import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/services/auth.service";
import { NgForm } from "@angular/forms";
import { AngularFireDatabase } from "@angular/fire/database";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-donatesignup",
  templateUrl: "./donatesignup.component.html",
  styleUrls: ["./donatesignup.component.css"],
})
export class DonatesignupComponent implements OnInit {
  userId;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private auth: AuthService,
    private db: AngularFireDatabase
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const { firstName, lastName, email, password, phoneNumber } = f.form.value;

    this.auth
      .signUp(email, password)
      .then((res) => {
        console.log(res);
        const { uid } = res.user;
        this.userId = uid;

        console.log("about to put details into db");
        this.db.object(`/donors/${uid}`).set({
          id: uid,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
        });
      })
      .then(() => {
        console.log("managed to put into db");
        this.router.navigateByUrl(`/donate/${this.userId}`);
        this.toastr.success("Successful signup");
      })
      .catch((err) => {
        console.log(err);
        this.toastr.error("Error signin up.");
      });
  }
}
