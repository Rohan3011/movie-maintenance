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
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + this.movieUrl);
  }
}
