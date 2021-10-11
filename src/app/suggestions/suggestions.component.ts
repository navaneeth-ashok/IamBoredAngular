import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ɵNgModuleTransitiveScopes,
  EventEmitter,
} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Movie } from '../movies';
import { Search } from '../titlesuggestions';
import { Track } from '../tracks';
import { Suggestions } from '../suggestions';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
};

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css'],
})
export class SuggestionsComponent implements OnChanges {
  suggestion: Suggestions;
  isLoaded = true;
  showResults = false;
  filterResult = 1;
  // receive the input from input component
  @Input('inputData') public searchText: string;

  // Send the new search term to parent component as an event
  @Output() updatedSearchString: EventEmitter<any> = new EventEmitter();
  public setSearchString(input: any) {
    this.updatedSearchString.emit(input);
  }

  // all:1 | track:2 | movie:3 filter
  public setFilter(input: number) {
    this.filterResult = input;
  }

  constructor(private httpClient: HttpClient) {}

  // onChange call the API for updated suggestions
  // call only when the searchText is not empty
  // change status from
  ngOnChanges(changes: SimpleChanges): void {
    if (this.searchText !== '') {
      this.showResults = true;
      this.getSuggestions();
    }
  }

  // call the API endpoint with the data received from user
  getSuggestions() {
    let body = new HttpParams().set('userInput', this.searchText);
    // set isLoaded to false to show the user that a fetch is in-progress
    this.isLoaded = false;

    // fetch the results from endpoint and add all the data to the suggestion class instance
    // this class will be used by the template to call the corresponding child components which will be
    // rendering the UI
    this.httpClient
      .post<any>(
        'https://iam-bored-server.herokuapp.com//fetchSuggestion',
        body.toString(),
        httpOptions
      )
      .subscribe((resp) => {
        let trackSuggestionArray = [];
        let movieSuggestionArray = [];
        let titleSuggestionArray = [];
        if (resp[0].tracks != undefined) {
          for (let track of resp[0].tracks) {
            let trackItem = new Track(
              track.name,
              track.album.images[0].url,
              track.album.name,
              track.album.external_urls.spotify,
              track.id,
              'col-sm-6'
            );
            trackSuggestionArray.push(trackItem);
          }
        }

        if (resp[1].Similar.Results !== undefined) {
          for (let movie of resp[1].Similar.Results) {
            let movieItem = new Movie(
              movie.Name,
              movie.yID,
              movie.posterIMG,
              movie.plot,
              movie.metaScore,
              movie.imdbRating,
              movie.release,
              movie.runtime,
              movie.genre,
              movie.Actors
            );
            movieSuggestionArray.push(movieItem);
          }
        }

        if (resp[2].Response !== 'False' && resp[2] !== undefined) {
          for (let title of resp[2].Search) {
            let searchItem = new Search(title);
            titleSuggestionArray.push(searchItem);
          }
        }

        let suggestionItem = new Suggestions(
          trackSuggestionArray,
          movieSuggestionArray,
          titleSuggestionArray
        );
        this.suggestion = suggestionItem;
        this.isLoaded = true;
      });
  }
}
