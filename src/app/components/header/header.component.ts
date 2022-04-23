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
  isDescending: boolean = false;
  hypen: string = '-';
  queryParams: string;
  constructor() { }

  ngOnInit(): void {
  }

  @Output() filterEvent = new EventEmitter();

  handleDescending() {
    this.isDescending = !this.isDescending;
    this.callFilterEvent();
  }

  handleFilter(query: string) {
    if (this.queryParams === query)
      this.queryParams = "";
    else
      this.queryParams = query;
    this.callFilterEvent();
  }

  callFilterEvent() {
    const query = (this.isDescending ?
      this.hypen + this.queryParams : this.queryParams);
    this.filterEvent.emit(query)
  }


  getStyle(tag: string) {
    let style = "tags-default";
    if (tag == this.queryParams)
      style = "tags-active";
    return style;
  }
}
