import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/types/Movie';


@Component({
  selector: 'app-movie-banner',
  templateUrl: './movie-banner.component.html',
  styleUrls: ['./movie-banner.component.css']
})
export class MovieBannerComponent implements OnInit {

  movie: Movie = {
    date_of_release: "",
    title: "",
    image: "",
    id: 0,
    language: "EN",
    description: ""
  }

  public movieId: string = "5";
  constructor(private movieService: MovieService, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.movieId = params["id"];
    });
  }

  ngOnInit(): void {
    this.movieService.getMovieById(this.movieId).subscribe((movie) => {
      this.movie = movie;
    });
  }
}
