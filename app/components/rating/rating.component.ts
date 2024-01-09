// import { Component,Input } from '@angular/core';

// @Component({
//   selector: 'app-rating',
//   templateUrl: './rating.component.html',
//   styleUrl: './rating.component.css',
// })
// export class RatingComponent {
//   popularMovies = [
//     { title: 'Movie 1', rating: 4.5, imageUrl: 'path/to/image1.jpg' },
//     { title: 'Movie 2', rating: 4.2, imageUrl: 'path/to/image2.jpg' },
//     { title: 'Movie 3', rating: 3.8, imageUrl: 'path/to/image3.jpg' },
//   ];
//   @Input() rating: number = 0;
//   starsArray = Array(5).fill(0);
// }

import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class RatingComponent {
  popularMovies = [
    { title: 'Movie 1', rating: 4.5, imageUrl: 'path/to/image1.jpg' },
    { title: 'Movie 2', rating: 4.2, imageUrl: 'path/to/image2.jpg' },
    { title: 'Movie 3', rating: 3.8, imageUrl: 'path/to/image3.jpg' },
  ];
}
// Carousel with popular movie ratings Later