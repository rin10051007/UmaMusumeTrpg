import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabIndexService {
  private tabIndex = -1;

  constructor() {
  }

  setTabIndex(index: number) {
    this.tabIndex = index;
  }

  getTabIndex() {
    return this.tabIndex;
  }
}
