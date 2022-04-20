import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(id: number): void {
    this.router.navigate(['/movies/', id])
  }

}
