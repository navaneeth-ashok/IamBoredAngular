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
  };
  constructor() {}

  ngOnInit(): void {}
}
