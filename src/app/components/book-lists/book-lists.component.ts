import { Component, OnInit } from '@angular/core';
import { IBookLists, mockBookLists } from '../../models';

@Component({
  selector: 'app-book-lists',
  templateUrl: './book-lists.component.html',
  styleUrls: ['./book-lists.component.css']
})
export class BookListsComponent implements OnInit {
  searchTerm: string = null;
  bookLists: IBookLists[] = mockBookLists;

  constructor() {}

  ngOnInit() {}

  onSearched(value: string): void {
    this.searchTerm = value;
  }
}
