import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { Donations } from './../../model/Donations';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {

  donors = [];
  //donations = [];
  table = false;

  ELEMENT_DATA: Donations[];

  donationsColumnNames: string[] = ['transactionId', 'userId', 'date', 'donatedBy', 'amount'];
  //dataSource = new MatTableDataSource<Donations>(this.ELEMENT_DATA);

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
        console.table(this.donors);
      } else {
        this.toastr.error("No donors founded");
        this.donors = [];
      }
    });
  }

  getAllDonations(){
    this.db.object(`/donations`)
    .valueChanges()
    .subscribe((donation) => {
      if(donation){
        this.ELEMENT_DATA = Object.values(donation);
        console.table(this.ELEMENT_DATA);
      } else {
        this.toastr.error("No donations found, sorry...");
        this.ELEMENT_DATA = [];
      }
    });
  }

}
