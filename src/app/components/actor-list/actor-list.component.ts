import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';
import { Actor } from 'src/app/types/Actor';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actors: Actor[] = [];
  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorService.getActors().subscribe((actors) => {
      this.actors = actors;
    })
  }

}
