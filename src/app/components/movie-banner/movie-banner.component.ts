import { Component, OnInit } from '@angular/core';
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
  id: string = "5";
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovieById(this.id).subscribe((movie) => {
      this.movie = movie;
    });
  }
}