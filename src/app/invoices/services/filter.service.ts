import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  openFilter: boolean = false;

  toggleFilter(): void {
    this.openFilter = !this.openFilter;
  }

  closeFilter(e: any): void {
    if (
      e.target.parentNode.className !== 'header-btn--filter' &&
      e.target.parentNode.className !== 'header-filter--dropdown' &&
      !e.target.closest('.dropdown')
    ) {
      this.openFilter = false;
    }
  }
}