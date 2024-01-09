import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movies: Movie[] = [];
  selectedMovie: Movie | null = null;

  @Output() movieSelected = new EventEmitter<Movie>();

  constructor(private movieService: MovieService) {
    this.movies = this.movieService.getMovies();
  }

  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
    this.movieSelected.emit(movie);
  }
}
