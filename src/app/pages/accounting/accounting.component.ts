import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {

  donors = [];

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  getAllDonors(){
    this.db.object('/donors')
    .valueChanges()
    .subscribe((donor) => {
      if(donor){
        this.donors = Object.values(donor);
        console.log(this.donors);
      } else {
        this.toastr.error("No donors founded");
        this.donors = [];
      }
    });
  }

}
