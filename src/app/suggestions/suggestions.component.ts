import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ɵNgModuleTransitiveScopes,
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
  @Input('inputData') public searchText: string;

  public setSearchString(input: any) {
    this.searchText = input;
    console.log(input);
    this.getSuggestions();
  }

  public setFilter(input: number) {
    this.filterResult = input;
  }

  constructor(private httpClient: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.searchText !== '') {
      this.showResults = true;
      this.getSuggestions();
    } else {
      this.isLoaded;
    }
  }

  getSuggestions() {
    let body = new HttpParams().set('userInput', this.searchText);
    this.isLoaded = false;
    this.httpClient
      .post<any>(
        'http://localhost:5000/fetchSuggestion',
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
