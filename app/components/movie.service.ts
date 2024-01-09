import { Injectable } from '@angular/core';
import { Movie } from './movie';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller.',
      releaseYear: 2010,
      category: 'Science-Fiction',
      coverImage: 'assets/img1.png',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      description: 'A tale of hope and resilience.',
      releaseYear: 1994,
      category: 'Thriller',
      coverImage: 'assets/img2.png',
      rating: 4.9,
    },
    {
      id: 4,
      title: 'The Silence of the Lambs',
      description:
        'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to catch another serial killer',
      releaseYear: 2024,
      category: 'Drama',
      coverImage: 'assets/img3.png',
      rating: 4.4,
    },
    {
      id: 5,
      title: 'The Dark Knight',
      description: 'A superhero film directed by Christopher Nolan.',
      releaseYear: 2008,
      category: 'Horror',
      coverImage: 'assets/img1.png',
      rating: 4.9,
    },
    {
      id: 6,
      title: 'Forrest Gump',
      description: 'A drama film directed by Robert Zemeckis.',
      releaseYear: 2011,
      category: 'Science-Fiction',
      coverImage: 'assets/img2.png',
      rating: 4.4,
    },
    {
      id: 7,
      title: 'Gone Girl',
      description:
        'A husband becomes the prime suspect in the disappearance of his wife, revealing dark secrets about their marriage',
      releaseYear: 1999,
      category: 'Thriller',
      coverImage: 'assets/img3.png',
      rating: 4.1,
    },
    {
      id: 8,
      title: 'Shutter Island',
      description:
        'Two U.S. Marshals investigate the disappearance of a prisoner from a mental institution, uncovering disturbing truths.',
      releaseYear: 2004,
      category: 'Western',
      coverImage: 'assets/img1.png',
      rating: 4.1,
    },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }
}
