import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-apply",
  templateUrl: "./apply.component.html",
  styleUrls: ["./apply.component.css"],
})
export class ApplyComponent implements OnInit {
  uid = null;

  constructor(private db: AngularFireDatabase, private auth: AuthService) {
    this.auth.getUser().subscribe((user) => {
      this.uid = user?.uid;
    });
  }

  ngOnInit(): void {}
}
