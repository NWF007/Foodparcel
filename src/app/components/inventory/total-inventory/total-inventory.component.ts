import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-total-inventory",
  templateUrl: "./total-inventory.component.html",
  styleUrls: ["./total-inventory.component.css"],
})
export class TotalInventoryComponent implements OnInit {
  constructor(private db: AngularFireDatabase, private toastr: ToastrService) {}

  ngOnInit(): void {}

  currentInventory() {}
}
