import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { Donors } from './../../../model/Donors';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {

  //donors = [];

  ELEMENT_DATA: Donors[];

  donorsColumnNames: string[] = ['ID', 'FirstName', 'LastName', 'Email', 'PhoneNumber'];

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAllDonors();
  }

  
  getAllDonors(){
    this.db.object('/donors')
    .valueChanges()
    .subscribe((donor) => {
      if(donor){           
        this.ELEMENT_DATA = Object.values(donor);
        console.table(this.ELEMENT_DATA);
      } else {
        this.toastr.error("No donors founded");
        this.ELEMENT_DATA = [];
      }
    });
  }

}
