import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AngularFireDatabase } from "@angular/fire/database";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-viewapplication",
  templateUrl: "./viewapplication.component.html",
  styleUrls: ["./viewapplication.component.css"],
})
export class ViewapplicationComponent implements OnInit {
  applicantId;

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
      .subscribe((applicant) => {
        if (applicant) {
          // this.ELEMENT_DATA = Object.values(donor);
          console.log(Object.values(applicant));
        } else {
          this.toastr.error("No application founded");
          // this.ELEMENT_DATA = [];
        }
      });
  }
}
