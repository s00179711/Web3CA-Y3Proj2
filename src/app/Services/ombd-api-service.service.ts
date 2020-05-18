import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OmbdApiServiceService {

  private _siteURL = 'http://www.omdbapi.com/?t=';
  private _key = '&apikey=3920517d';

  constructor(private _http: HttpClient){}

  getMovieData(movieName): Observable<IOMDBResponse>
  {
    console.log("URL: " + this._siteURL+movieName+this._key);
    return this._http.get<IOMDBResponse>(this._siteURL+movieName+this._key).pipe(
    tap (data => console.log('All: ' + JSON.stringify(data))),
    catchError(this.handleError));
  }
  
 private handleError(err: HttpErrorResponse)
 {
    console.log('OmdbApiService: ' + err.message);
    return Observable.throw(err.message);
  }
}
