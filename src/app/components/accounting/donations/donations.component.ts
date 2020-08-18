import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { Donations } from './../../../model/Donations';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  ELEMENT_DATA: Donations[];

  donationsColumnNames: string[] = ['transactionId', 'userId', 'date', 'donatedBy', 'amount'];

  
  //dataSource = new MatTableDataSource<Donations>(this.ELEMENT_DATA);

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAllDonations();
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
