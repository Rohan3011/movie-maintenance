import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from 'src/app/services/actor.service';
import { Actor } from 'src/app/types/Actor';

@Component({
  selector: 'app-actor-banner',
  templateUrl: './actor-banner.component.html',
  styleUrls: ['./actor-banner.component.css']
})
export class ActorBannerComponent implements OnInit {

  actor: Actor = {
    id: 0,
    name: "",
    image: "",
    date_of_birth: "",
    debut: "",
    debut_movie: ""
  }

  public actorId = "";

  constructor(private actorService: ActorService, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.actorId = params["id"];
    });
  }

  ngOnInit(): void {
    this.actorService.getActorById(this.actorId).subscribe((actor) => {
      this.actor = actor;
    })
  }

}
