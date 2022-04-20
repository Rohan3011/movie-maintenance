import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/types/Actor';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {

  @Input() actor: Actor = {
    name: "",
    image: "",
    date_of_birth: "",
    debut: "",
    debut_movie: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
