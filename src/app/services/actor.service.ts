import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Actor } from '../types/Actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private baseUrl: string = 'http://localhost:8000/';
  private actorUrl: string = 'api/actors/'
  private castUrl: string = 'api/casts/movie/'



  constructor(private http: HttpClient) { }

  getActorsOfMovie(id: string): Observable<Actor[]> {



    return this.http.post<Actor[]>(this.baseUrl + this.castUrl, { "movie": id });
  }

  getActorById(id: string | null): Observable<Actor> {
    return this.http.get<Actor>(this.baseUrl + this.actorUrl + id);
  }
}
