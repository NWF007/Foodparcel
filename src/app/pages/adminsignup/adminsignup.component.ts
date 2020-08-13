import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm} from '@angular/forms';
import { finalize } from "rxjs/operators";
import { AngularFireDatabase } from "@angular/fire/database";


@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {

  listOfJobs : Array<string> = ["Accountant", "Clerk", "Manager", "Inventory Controller"];

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private db : AngularFireDatabase
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){

    const {email, password, firstName, lastName, jobTitle, dateStarted} = f.form.value;

    this.auth.signUp(email, password)
    .then((res) => {
      console.log(res);
      const {uid} = res.user;

      console.log("about to put details into db");
      this.db.object(`/employees/${uid}`)
      .set({               
        id: uid,
        firstName: firstName,
        lastName : lastName,
        email: email,
        jobTitle: jobTitle,
        dateStarted : dateStarted
      });
    })
    .then(() => {
      console.log("managed to put into db");
      this.router.navigateByUrl('/admin');
      this.toastr.success("Successful signup");
    })
    .catch((err) => {
      console.log(err);
      this.toastr.error("Error signin up.")
    })
  }

}
