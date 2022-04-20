import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/types/Actor';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {

  @Input() actor: Actor = {
    id: 0,
    name: "",
    image: "",
    date_of_birth: "",
    debut: "",
    debut_movie: ""
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(id: number): void {
    this.router.navigate(['/actors/', id])
  }
}
