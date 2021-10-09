import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, InputComponent, SuggestionsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
