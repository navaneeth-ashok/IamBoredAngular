import { Track } from './tracks';
import { Movie } from './movies';
import { Search } from './titlesuggestions';

// Suggestion class containing array of tracks, array of movies and array of search suggestions
// Populate the received json from API into this for easy maintanence
export class Suggestions {
  constructor(
    public tracks: Track[],
    public movies: Movie[],
    public sugg: Search[]
  ) {}
}
