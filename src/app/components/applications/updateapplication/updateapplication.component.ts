import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AngularFireDatabase } from "@angular/fire/database";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-updateapplication",
  templateUrl: "./updateapplication.component.html",
  styleUrls: ["./updateapplication.component.css"],
})
export class UpdateapplicationComponent implements OnInit {
  qualifyOptions: Array<string> = ["", "true", "false"];
  applicantsList: Array<string> = [""];

  id: string;
  qualify: boolean;

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const { id, qualify } = f.form.value;

    console.log("updating");
    this.db.database.ref(`/applicants/${id}`).update({
      qualify: qualify,
    });
    console.log("done");
  }
}
