import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/types/Movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  queryParams: string;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies(this.queryParams).subscribe((movies) => {
      this.movies = movies;
    });
  }

  setQueryParams(query: string) {
    this.queryParams = query;
    this.movieService.getMovies(this.queryParams).subscribe((movies) => {
      this.movies = movies;
    });
  }

}
