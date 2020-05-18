import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { OmbdApiServiceService } from 'src/app/Services/ombd-api-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() public movieDataEE: EventEmitter<IOMDBResponse[]> = new EventEmitter<IOMDBResponse[]>();
  show: boolean=false;
  movieData: IOMDBResponse;
  errorMessage: string;
  imageHeight: 300;
  constructor (private _omdbService: OmbdApiServiceService, private _fb: FormBuilder){}

  ngOnInit() {
  }

  public searchForm: FormGroup = new FormGroup({
    searchText: new FormControl({ disabled: false, value: '' }, Validators.required)
  });

  public get searchText(): AbstractControl { return this.searchForm.get('searchText'); }

  public onSubmit =  Boolean => {
    this.show = false;
    this.getMovieDetails(this.searchText.value.trim());
  }

  getMovieDetails(searchText: String) {
    this._omdbService.getMovieData(searchText).subscribe(movieData => 
      {
        this.movieData=movieData;
        console.log('getMovieDetails:'+this.movieData);
      });
      this.show=true;
  }






}