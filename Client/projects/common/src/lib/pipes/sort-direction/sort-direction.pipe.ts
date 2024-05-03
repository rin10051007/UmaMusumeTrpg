import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {SortDirection} from "../../enums/sort/sort-direction";

@Pipe({
  name: 'sortDirection',
  standalone: true
})
export class SortDirectionPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(sortDirection: SortDirection): SafeHtml {
    switch (sortDirection) {
      case SortDirection.ascendingOrder:
        return this.sanitizer.bypassSecurityTrustHtml('<i class="bi bi-caret-up-fill"></i>');
      case SortDirection.descendingOrder:
        return this.sanitizer.bypassSecurityTrustHtml('<i class="bi bi-caret-down-fill"></i>');
      default:
        return '';
    }
  }

}
