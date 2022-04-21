import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/types/Movie';
import { faThumbsUp, faThumbsDown, faClock, faArrowUpFromBracket, faEllipsis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-banner',
  templateUrl: './movie-banner.component.html',
  styleUrls: ['./movie-banner.component.css']
})
export class MovieBannerComponent implements OnInit {

  movie!: Movie;

  like = faThumbsUp;
  dislike = faThumbsDown;
  later = faClock;
  share = faArrowUpFromBracket;
  more = faEllipsis;

  public movieId: string = "";
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
