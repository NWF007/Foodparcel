import { environment } from "./../environments/environment";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./components/admin/admin.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { LandingpageComponent } from "./pages/landingpage/landingpage.component";
import { HomeComponent } from "./pages/home/home.component";
import { PagenotfoundComponent } from "./pages/pagenotfound/pagenotfound.component";
import { AdminsigninComponent } from "./pages/adminsignin/adminsignin.component";
import { AdminsignupComponent } from "./pages/adminsignup/adminsignup.component";
import { FormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { ToastrModule } from "ngx-toastr";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DeliveryComponent } from "./pages/delivery/delivery.component";
import { AccountingComponent } from "./pages/accounting/accounting.component";
import { ApplicationsComponent } from "./pages/applications/applications.component";
import { InventoryComponent } from "./pages/inventory/inventory.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DonateComponent } from "./pages/donate/donate.component";
import { ApplyComponent } from "./pages/apply/apply.component";
import { DeliveriesComponent } from "./pages/deliveries/deliveries.component";

//import { DatePickerModule} from '@angular/material';
import { MatNativeDateModule } from "@angular/material/core";
import { MatTableModule } from "@angular/material/table";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { DonatesignupComponent } from "./pages/donatesignup/donatesignup.component";
import { DonatesigninComponent } from "./pages/donatesignin/donatesignin.component";
import { ApplysignupComponent } from "./pages/applysignup/applysignup.component";
import { ApplysigninComponent } from "./pages/applysignin/applysignin.component";

// this is for google maps
import { AgmCoreModule } from "@agm/core";
import { DonationsComponent } from "./components/accounting/donations/donations.component";
import { DonorsComponent } from "./components/accounting/donors/donors.component";
import { ApplicantsComponent } from "./components/applications/applicants/applicants.component";
import { UpdateapplicationComponent } from "./components/applications/updateapplication/updateapplication.component";
import { AddParcelsComponent } from "./components/inventory/add-parcels/add-parcels.component";
import { RemoveParcelsComponent } from "./components/inventory/remove-parcels/remove-parcels.component";
import { TotalInventoryComponent } from "./components/inventory/total-inventory/total-inventory.component";
import { VolunteersComponent } from "./pages/volunteers/volunteers.component";
import { VolunteerssignupComponent } from "./pages/volunteerssignup/volunteerssignup.component";
import { VolunteerssigninComponent } from "./pages/volunteerssignin/volunteerssignin.component";
import { DashboardComponent } from "./components/volunteers/dashboard/dashboard.component";
import { DeliveryCompletedComponent } from "./components/volunteers/delivery-completed/delivery-completed.component";
import { ViewapplicationComponent } from "./components/applications/viewapplication/viewapplication.component";
import { DatePipe } from "@angular/common";
// import {} from 'googlemaps';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    LandingpageComponent,
    HomeComponent,
    PagenotfoundComponent,
    AdminsigninComponent,
    AdminsignupComponent,
    DeliveryComponent,
    AccountingComponent,
    ApplicationsComponent,
    InventoryComponent,
    DonateComponent,
    ApplyComponent,
    DeliveriesComponent,
    DonatesignupComponent,
    DonatesigninComponent,
    ApplysignupComponent,
    ApplysigninComponent,
    DonationsComponent,
    DonorsComponent,
    ApplicantsComponent,
    UpdateapplicationComponent,
    AddParcelsComponent,
    RemoveParcelsComponent,
    TotalInventoryComponent,
    VolunteersComponent,
    VolunteerssignupComponent,
    VolunteerssigninComponent,
    DashboardComponent,
    DeliveryCompletedComponent,
    ViewapplicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    BrowserAnimationsModule,
    ToastrModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebase),

    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule,

    MatDatepickerModule,
    // MaterialModule.forRoot(),
    MatNativeDateModule,
    MatInputModule,
    //DatePickerModule
    MatTableModule,
    MatSnackBarModule,

    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDh-NTL96frMkzPszwbrcf0hdQ8pRA67I0", //add apiKey here
    }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
