import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  showLogOutButtonApply: boolean;
  public navbarCollapsed = true;

  email = null;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    public router: Router,
    private toastr: ToastrService
  ) {
    auth.getUser().subscribe((user) => {
      console.log("User is: ", user);
      this.email = user?.email;
    });
  }

  ngOnInit(): void {
    this.showBut();
  }

  showBut() {
    let idLength = parseInt(this.route.snapshot.paramMap.get("id"));

    if (idLength > 1) {
      this.showLogOutButtonApply = true;
    } else this.showLogOutButtonApply = false;
  }

  async handleSignOut() {
    try {
      await this.auth.signOut();

      this.router.navigateByUrl("/admin/signin");
      this.toastr.info("Successfully signed out");
      this.email = null;
    } catch (error) {
      this.toastr.error("Problem signin out...");
    }
  }

  async handleDonorSignOut() {
    try {
      await this.auth.signOut();

      this.router.navigateByUrl("/donate/signin");
      this.toastr.info("Successfully signed out");
      this.email = null;
    } catch (error) {
      this.toastr.error("Problem signin out...");
    }
  }

  async handleVolunteerSignOut() {
    try {
      await this.auth.signOut();

      this.router.navigateByUrl("/volunteer/signin");
      this.toastr.info("Successfully signed out");
      this.email = null;
    } catch (error) {
      this.toastr.error("Problem signin out...");
    }
  }

  async handleApplySignOut() {
    try {
      await this.auth.signOut();

      this.router.navigateByUrl("/apply/signin");
      this.toastr.info("Successfully signed out");
      this.email = null;
    } catch (error) {
      this.toastr.error("Problem signin out...");
    }
  }
}
