import { Track } from './tracks';
import { Movie } from './movies';
import { Search } from './titlesuggestions';

export class Suggestions {
  constructor(
    public tracks: Track[],
    public movies: Movie[],
    public sugg: Search[]
  ) {}
}
