import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../tracks';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css'],
})
export class TrackComponent implements OnInit {
  @Input('trackData') public trackItem: Track;
  public urlPoster: SafeResourceUrl;
  public urlAlbumLink: SafeResourceUrl;
  public urlTrackLink: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.urlPoster = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.trackItem.posterIMG
    );
    this.urlAlbumLink = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.trackItem.albumLink
    );
    this.urlTrackLink = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://open.spotify.com/embed/track/' + this.trackItem.trackID
    );
  }
}
