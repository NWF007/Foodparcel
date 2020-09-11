import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { Applications } from './../../../model/Applications';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {

  ELEMENT_DATA: Applications[];

  applicationsColumnNames: string[] = ['Id', 'firstName', 'lastName', 'email', 'phoneNumber', 'annualIncome', 'address', 'qualify'];

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAllApplicants();
  }

  getAllApplicants(){
    this.db.object(`/applicants`)
    .valueChanges()
    .subscribe((applicant) => {
      if(applicant){
        this.ELEMENT_DATA = Object.values(applicant);
        console.table(this.ELEMENT_DATA);
      } else {
        this.toastr.error("No donations found, sorry...");
        this.ELEMENT_DATA = [];
      }
    });
  }

}
