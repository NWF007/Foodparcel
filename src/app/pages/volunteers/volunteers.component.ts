import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-volunteers",
  templateUrl: "./volunteers.component.html",
  styleUrls: ["./volunteers.component.css"],
})
export class VolunteersComponent implements OnInit {
  dashboard = false;
  deliverComplete = false;

  constructor() {}

  ngOnInit(): void {}

  showDashboard() {
    this.dashboard = !this.dashboard;
  }

  showDeliveriesDone() {
    this.deliverComplete = !this.deliverComplete;
  }
}
