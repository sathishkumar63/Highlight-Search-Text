import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() searchText: string;
  @Output() notifySearchChange = new EventEmitter<string>();
  subscriptions: Subscription = new Subscription();
  searchFieldUpdate = new Subject<string>();

  constructor() {
    this.updateSearchText();
  }

  ngOnInit() {
    this.searchText = this.searchText || '';
  }

  updateSearchText() {
    this.subscriptions.add(
      this.searchFieldUpdate
        .pipe(
          debounceTime(500)
        )
        .subscribe(value => {
          this.onSearch(value);
        })
    );
  }

  onSearch(value: string) {
    this.notifySearchChange.emit(value);
  }

  onClearSearch() {
    this.searchText = '';
    this.notifySearchChange.emit('');
  }

  ngOnDestroy() {
    this.subscriptions?.unsubscribe();
  }
}
