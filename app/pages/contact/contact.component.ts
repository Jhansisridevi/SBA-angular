import { Component } from '@angular/core';
import { Movie } from '../../components/movie';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  selectedMovie: Movie | null = null;

  onMovieSelected(movie: Movie) {
    this.selectedMovie = movie;
  }
}
