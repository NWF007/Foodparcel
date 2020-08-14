import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  applications = [];

  constructor(
    private db: AngularFireDatabase,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  getAllApplicantions(){
    this.db.object('/applicants')
    .valueChanges()
    .subscribe((applicant) => {
      if(applicant){
        this.applications = Object.values(applicant);
        console.log(applicant);
      } else {
        this.toastr.error("No applications found");
        this.applications = [];
      }
    });
  }

}
