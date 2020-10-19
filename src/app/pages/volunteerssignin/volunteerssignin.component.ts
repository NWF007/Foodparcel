import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-volunteerssignin",
  templateUrl: "./volunteerssignin.component.html",
  styleUrls: ["./volunteerssignin.component.css"],
})
export class VolunteerssigninComponent implements OnInit {
  userId = null;

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;

    this.auth
      .signIn(email, password)
      .then((res) => {
        this.userId = res.user.uid;
        this.toastr.success("sign in successful");
        this.router.navigateByUrl(`/volunteer/${this.userId}`);
      })
      .catch((err) => {
        this.toastr.error(err.message, "", {
          closeButton: true,
        });
      });
  }
}
