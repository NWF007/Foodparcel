import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFireDatabase } from "@angular/fire/database";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-delivery-completed",
  templateUrl: "./delivery-completed.component.html",
  styleUrls: ["./delivery-completed.component.css"],
})
export class DeliveryCompletedComponent implements OnInit {
  qualifyOptions: Array<string> = ["", "true", "false"];
  volunteerId;
  id: string;
  isComplete: boolean;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.volunteerId = id;
  }

  onSubmit(f: NgForm) {
    const { id, isComplete } = f.form.value;

    console.log("updating");
    this.db.database.ref(`/delivery/${id}`).update({
      isComplete: isComplete,
      volunteerId: this.volunteerId,
    });

    if (isComplete === "true") {
      this.toastr.success("Thank you for delivering these parcels");
    }
    console.log("done");
  }
}
