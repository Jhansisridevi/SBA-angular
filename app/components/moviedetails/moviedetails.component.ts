import { Component,Input } from '@angular/core';
import {Movie} from '../movie'
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css'
})
export class MoviedetailsComponent {
  @Input() selectedMovie: Movie | null = null;
}
