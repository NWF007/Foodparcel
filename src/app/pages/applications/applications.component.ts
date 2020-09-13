import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-applications",
  templateUrl: "./applications.component.html",
  styleUrls: ["./applications.component.css"],
})
export class ApplicationsComponent implements OnInit {
  applicants = false;
  update = false;

  applications = [];

  constructor(private db: AngularFireDatabase, private toastr: ToastrService) {}

  ngOnInit(): void {}

  showApplicants() {
    this.applicants = !this.applicants;
  }

  updateApplicant() {
    this.update = !this.update;
  }
}
