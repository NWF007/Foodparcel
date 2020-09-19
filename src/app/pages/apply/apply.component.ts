import { Component, OnInit, Output } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-apply",
  templateUrl: "./apply.component.html",
  styleUrls: ["./apply.component.css"],
})
export class ApplyComponent implements OnInit {
  uid = null;

  applicantId;
  status;

  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {
    this.auth.getUser().subscribe((user) => {
      this.uid = user?.uid;
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.applicantId = id;
  }

  showStatus() {
    this.status = !this.status;
  }
}
