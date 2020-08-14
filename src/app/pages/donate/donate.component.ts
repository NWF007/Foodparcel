import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';

import { v4 as uuidv4 } from "uuid";
import { Router } from '@angular/router';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  user = null;
  amount: number;
  userId;
  form = false;


  constructor(
    private db : AngularFireDatabase,
    private toastr: ToastrService,
    private auth: AuthService,
    private router: Router
  ) {
    auth.getUser().subscribe((user) => {
      this.db.object(`/donors/${user.uid}`)
      .valueChanges()
      .subscribe((user) => {
        this.user = user;
        console.log(user);
      });
    });
   }

  ngOnInit(): void {
  }

  displayForm(){
    this.form = !this.form;
  }

  onSubmit(){
    const uid = uuidv4();

    this.db.object(`/donations/${uid}`)
    .set({
      transactionId: uid,      
      amount: this.amount,
      date: Date.now(),
      donatedBy: this.user.firstName,
      userId: this.user.id
    })
    .then(() => {
      console.log(uid, this.userId, this.amount, Date.now());
      this.toastr.success("Successfully donated, thank you!");
      this.amount = 0;
      this.form = false;
      this.router.navigateByUrl('/donate');
    })
    .catch((err) => {
      this.toastr.error("Donation Unsuccessful");
    });
  }

}
