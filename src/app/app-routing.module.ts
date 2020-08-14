import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminsignupComponent } from './pages/adminsignup/adminsignup.component';
import { AdminsigninComponent } from './pages/adminsignin/adminsignin.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { AdminComponent } from './components/admin/admin.component';

import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo
} from "@angular/fire/auth-guard";

import { DeliveryComponent } from './pages/delivery/delivery.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { DeliveriesComponent } from './pages/deliveries/deliveries.component';
import { DonateComponent } from './pages/donate/donate.component';
import { DonatesignupComponent } from './pages/donatesignup/donatesignup.component';
import { DonatesigninComponent } from './pages/donatesignin/donatesignin.component';
import { ApplysignupComponent } from './pages/applysignup/applysignup.component';
import { ApplysigninComponent } from './pages/applysignin/applysignin.component';



const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/admin/signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/admin']);

const redirectUnauthorizedDonorToLogin = () => redirectUnauthorizedTo(['/donate/signin']);
const redirectLoggedInDonorToDonate = () => redirectLoggedInTo(['/donate']);

const redirectUnauthorizedApplicantToLogin = () => redirectUnauthorizedTo(['/apply/signin']);
const redirectLoggedInApplicantToApply = () => redirectLoggedInTo(['/apply']);

const routes: Routes = [
  {
    path: 'apply',
    component: ApplyComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedApplicantToLogin}
},
{
  path: 'apply/signup',
  component: ApplysignupComponent,
  canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectLoggedInApplicantToApply}
},
{
  path: 'apply/signin',
  component: ApplysigninComponent,
  canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectLoggedInApplicantToApply}
},
{
  path: 'donate',
  component: DonateComponent,
  canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectUnauthorizedDonorToLogin}
},
{
  path: 'donate/signup',
  component: DonatesignupComponent,
  canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectLoggedInDonorToDonate}
},
{
  path: 'donate/signin',
  component: DonatesigninComponent,
  canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectLoggedInDonorToDonate}
},
{
  path: 'delivery',
  component: DeliveriesComponent,
  // canActivate: [AngularFireAuthGuard],
  // data: {authGuardPipe: redirectLoggedInToHome}
},
{
    path: 'admin/signin',
    component: AdminsigninComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToHome}
},
{
  path: 'admin/signup',
  component: AdminsignupComponent,
  canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectLoggedInToHome}
},
{
  path: 'admin/delivery',
  component: DeliveryComponent,
  canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectUnauthorizedToLogin}
},
{
  path: 'admin/applications',
  component: ApplicationsComponent,
  canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectUnauthorizedToLogin}
},
{
  path: 'admin/inventory',
  component: InventoryComponent,
  canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectUnauthorizedToLogin}
},
{
  path: 'admin/accounting',
  component: AccountingComponent,
  canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectUnauthorizedToLogin}
},
{
  path: 'admin',
  component: LandingpageComponent,
  canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectUnauthorizedToLogin}
},
{
  path: '',
  component: HomeComponent,
  // canActivate: [AngularFireAuthGuard],
  // data: {authGuardPipe: redirectLoggedInToHome}
},
{
  path: '**',
  component: PagenotfoundComponent,
  // canActivate: [AngularFireAuthGuard],
  // data: {authGuardPipe: redirectLoggedInToHome}
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
