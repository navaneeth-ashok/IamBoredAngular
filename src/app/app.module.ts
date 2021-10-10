import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { TrackComponent } from './track/track.component';

@NgModule({
  declarations: [AppComponent, InputComponent, SuggestionsComponent, MovieComponent, TrackComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
