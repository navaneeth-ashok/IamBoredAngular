import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  // bunch of random text to show the user
  welcomeObj = {
    welcomeString1: 'Feeling Bored?',
    welcomeString2:
      'Looking to discover some movies or tracks that you might like?',
    welcomeString3: 'Type your favorite movie or song here',
    welcomeString4: `I'll make you an offer you can't refuse`,
    welcomeString5: `You start typing on the field above, I'll ask friends for movies, and will look in pubs for music`,
    welcomeString6: `Deal?`,
  };
  // init seachInput as nothing
  public searchInput = '';

  // function to update the searchInput from html template
  updateSearch(abc: string) {
    this.searchInput = abc;
  }

  // fired by the suggestion child on clicking the buttons with autocompleted movie titles
  // receive the data and update hte searchInput
  updateSearchFromSuggestion(searchString: string) {
    this.updateSearch(searchString);
  }

  constructor() {}

  ngOnInit(): void {}
}
