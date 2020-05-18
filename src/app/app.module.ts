import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDisplayComponent } from './Components/movie-display/movie-display.component';
import { AngularFireAuthModule } from '@angular/fire/auth/public_api';
import { environment, firebaseConfig } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import {FormsModule} from '@angular/forms';
import {AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';
import { HomeComponent } from './Pages/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {NavBarComponent} from './Components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDisplayComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
