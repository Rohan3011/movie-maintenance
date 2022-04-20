import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/types/Movie';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.css']
})
export class FeaturedListComponent implements OnInit {

  @Input() actor: any;
  movies: Movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMoviesOfActor(this.actor).subscribe((movies) => {
      this.movies = movies;
    })
  }

}
