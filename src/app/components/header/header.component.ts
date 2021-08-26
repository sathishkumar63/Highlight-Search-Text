import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() notifySearch = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onSearchChange(value: string) {
    this.notifySearch.emit(value);
  }
}
