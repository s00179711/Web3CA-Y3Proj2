import { Component, OnInit, Input } from '@angular/core';
import {OmbdApiServiceService} from '../../Services/ombd-api-service.service';
import { User } from 'src/app/interfaces/user';
import { AuthGuard } from "../../Services/auth-guard.service";
//import { auth } from "firebase/auth";

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css'],
  providers: [OmbdApiServiceService]
})
export class MovieDisplayComponent {
  @Input() public _movieData: IOMDBResponse;
  
  movieData: IOMDBResponse;
  imageHeight: 300;

  constructor (authGuard: AuthGuard){
  }

  user: User;

  ngOnInit() {
    //this.auth.user$.subscribe(user => this.user = user)
  }

  recommendThisMovie(): void{
    
  }

  pickThisMovie(){

  }

}