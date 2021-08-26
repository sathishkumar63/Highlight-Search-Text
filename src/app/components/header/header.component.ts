import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText = null;
  constructor() {}

  ngOnInit() {}

  onSearchChange(value: string) {
    this.searchText = value;
  }
}
