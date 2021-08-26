import { Component, Input, OnInit } from '@angular/core';
import { IBookLists } from '../../models';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() bookInfo: IBookLists;

  constructor() { }

  ngOnInit() {
  }

}