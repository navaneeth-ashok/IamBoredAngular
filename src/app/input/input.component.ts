import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  welcomeObj = {
    welcomeString1: 'Feeling Bored?',
    welcomeString2:
      'Looking to discover some movies or tracks that you might like?',
    welcomeString3: 'Type your favorite movie or song here',
    welcomeString4: `I'll make you an offer you can't refuse`,
    welcomeString5: `You start typing on the field above, I'll ask friends for movies, and will look in pubs for music`,
    welcomeString6: `Deal?`,
  };
  public searchInput = '';

  updateSearch(abc: string) {
    this.searchInput = abc;
  }

  updateSearchFromSuggestion(searchString: string) {
    console.log('ASDasdsdASDd');
    this.updateSearch(searchString);
  }

  constructor() {}

  ngOnInit(): void {}
}
