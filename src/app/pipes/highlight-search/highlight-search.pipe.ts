import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlightSearch'
})
export class HighlightSearchPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, searchText: any): any {
    if (!searchText) {
      return value;
    }

    const regex = new RegExp(searchText, 'gi');
    const match = value.match(regex);

    if (!match) {
      return value;
    }

    const result = value.replace(
      regex,
      `<mark class='highlight'><b>${match[0]}</b></mark>`
    );
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }
}
