import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from '../types/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl: string = 'http://localhost:8000/';
  private movieUrl: string = 'api/movies/'
  private movieListUrl: string = 'api/movies-list/'
  private castUrl: string = 'api/casts/actor/'

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + this.movieListUrl);
  }

  getMovieById(id: string | null): Observable<Movie> {
    return this.http.get<Movie>(this.baseUrl + this.movieUrl + id);
  }

  getMoviesOfActor(id: string): Observable<Movie[]> {
    return this.http.post<Movie[]>(
      this.baseUrl + this.castUrl, { "actor": id });
  }

}
