import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AngularFireDatabase } from "@angular/fire/database";
import { ToastrService } from "ngx-toastr";
import { Applications } from "src/app/model/Applications";

@Component({
  selector: "app-viewapplication",
  templateUrl: "./viewapplication.component.html",
  styleUrls: ["./viewapplication.component.css"],
})
export class ViewapplicationComponent implements OnInit {
  applicantId;
  applicantName;
  status = "";
  qualifying: true | false | null;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.applicantId = id;
    this.getStatus();
  }

  getStatus() {
    this.db
      .object(`/applicants/${this.applicantId}`)
      .valueChanges()
      .subscribe((applicant: Applications) => {
        if (applicant) {
          // this.applicantName = applicant.name;
          status = applicant.qualify.toString();
          console.log(status);
          if (status === "true") {
            console.log("Congrats you qualify");
            this.qualifying = true;
          } else if (status === "false") {
            console.log("Sorry you do not qualify");
            this.qualifying = false;
          } else {
            console.log("No updates yet, check again in a few days");
            this.qualifying = null;
          }
        } else {
          this.toastr.error("No application founded");
        }
      });
  }
}
