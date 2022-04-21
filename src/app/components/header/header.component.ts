import { Component, OnInit } from '@angular/core';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "Movie Name"
  filter = faArrowDownShortWide;
  constructor() { }

  ngOnInit(): void {
  }

}
