import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "Movie Name"
  filter = faArrowDownShortWide;
  private isDescending: boolean = false;
  private hypen: string = '-';
  private queryParams: string;
  constructor() { }

  ngOnInit(): void {
  }

  @Output() filterEvent = new EventEmitter();

  handleDescending() {
    this.isDescending = !this.isDescending;
    this.callFilterEvent();
  }

  handleFilter(query: string) {
    this.queryParams = query;
    this.callFilterEvent();
  }

  callFilterEvent() {
    const query = (this.isDescending ?
      this.hypen + this.queryParams : this.queryParams);
    console.log(query)
    this.filterEvent.emit(query)
  }
}
