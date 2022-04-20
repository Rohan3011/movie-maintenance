import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';
import { Actor } from 'src/app/types/Actor';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrls: ['./cast-list.component.css']
})
export class CastListComponent implements OnInit {

  movie: string = '5';
  actors: Actor[] = [];

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorService.getActorsOfMovie(this.movie).subscribe((actors) => {
      console.log(actors)
      this.actors = actors;
    });
  }

}
