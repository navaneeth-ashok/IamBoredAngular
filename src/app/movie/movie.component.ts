import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Movie } from '../movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input('movieData') public movieItem: Movie;
  public urlSafe: SafeResourceUrl;
  public isExpanded: boolean = false;

  public toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.movieItem.yID
    );
  }
}
