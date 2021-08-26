import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    return this.searchItems(items, searchText.toLowerCase());
  }

  searchItems(items: any[], searchText: string): any[] {
    const results = [];
    items.forEach(item => {
      if (
        (item.title && item.title.toLowerCase().includes(searchText)) ||
        (item.description &&
          item.description.toLowerCase().includes(searchText))
      ) {
        results.push(item);
      }
    });
    return results;
  }
}
