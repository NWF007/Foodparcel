import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';
import { app } from 'firebase';

@Component({
  selector: 'app-updateapplication',
  templateUrl: './updateapplication.component.html',
  styleUrls: ['./updateapplication.component.css']
})
export class UpdateapplicationComponent implements OnInit {

  id: string;
  qualify : boolean;

  constructor(
    private db : AngularFireDatabase,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(f : NgForm){
    const {id, qualify} = f.form.value;

    console.log(id, qualify);

    // this.db.object(`/applicants/${id}`)
    // .valueChanges()
    // .subscribe((applicant) => {
    //   console.log(applicant);
    //   applicant.set(qualify, qualify);
    // })
    // this.db.object(`/applications/${id}`)
    // .valueChanges()
    // .subscribe((applicant) => {
      
    // })

    // let updateObject = this.db.object(`/applicants/${id}`);

    // updateObject.update(qualify);

    // this.db.object(`/applicants/${id}`)
    // .snapshotChanges()
    // .pipe(
      
    //   map((changes : any) => {
    //     const data = changes.map(d => ({
    //       key: d.key}))
    //       return data;
    //       console.log(data)
    //     }))
        
      this.db.object(`/applicants/${id}`)
      .snapshotChanges()
      .subscribe((applicant) => {
        console.log(applicant);
      })

      }
    
    
  }


