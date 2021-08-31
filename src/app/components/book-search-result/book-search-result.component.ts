import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-search-result',
  templateUrl: './book-search-result.component.html',
  styleUrls: ['./book-search-result.component.css']
})
export class BookSearchResultComponent implements OnInit {
  @Input() searchResultsCount: number;
  @Input() bookListsCount: number;
  @Input() searchText: string;

  constructor() { }

  ngOnInit() {
  }

}