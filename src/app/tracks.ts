// Contains the Track class with
//  name : name of Track
//  posterIMG : image src for the album preview
//  albumName : name of album
//  albumLink : link to album in spotify
//  trackID : unique trackID to create the miniplayer
//  col : not in use, reserved for future
export class Track {
  constructor(
    public name: string,
    public posterIMG: string,
    public albumName: string,
    public albumLink: string,
    public trackID: string,
    public col: string
  ) {}
}
