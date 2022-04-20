import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Actor } from '../types/Actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private baseUrl: string = 'http://localhost:8000/';
  private actorUrl: string = 'api/actors/'
  constructor(private http: HttpClient) { }

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.baseUrl + this.actorUrl);
  }

  getActorById(id: string | null): Observable<Actor> {
    return this.http.get<Actor>(this.baseUrl + this.actorUrl + id);
  }
}
