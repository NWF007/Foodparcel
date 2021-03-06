import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-applysignin",
  templateUrl: "./applysignin.component.html",
  styleUrls: ["./applysignin.component.css"],
})
export class ApplysigninComponent implements OnInit {
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
        console.log("response", res);
        this.userId = res.user.uid;
        this.toastr.success("sign in successful");
        this.router.navigateByUrl(`/apply/${this.userId}`);
      })
      .catch((err) => {
        this.toastr.error(err.message, "", {
          closeButton: true,
        });
      });
  }
}
