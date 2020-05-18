import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './Components/verify-email/verify-email.component';
import { AuthGuard } from "../app/Services/auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'app-sign-up', component: SignUpComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'app-forgot-password', component: ForgotPasswordComponent },
  { path: 'app-verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }