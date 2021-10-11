// Movie class
// name : movie title
// yID : youtubeID to create the preview
// posterIMG : img src for the poster
// plot : plot of the movie
// metaScore : meta score rating
// imdbRating : imdb rating
// release : Date of release dd MM yyyy
// runtime : Total runtime in minutes
// genre : genre of movie
// actors : actors in the movie

export class Movie {
  constructor(
    public name: string,
    public yID: string,
    public posterIMG: string,
    public plot: string,
    public metaScore: string,
    public imdbRating: string,
    public release: string,
    public runtime: string,
    public genre: string,
    public actors: string
  ) {}
}
