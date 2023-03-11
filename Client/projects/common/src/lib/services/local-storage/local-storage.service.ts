import { Injectable } from '@angular/core';
import { Item } from '../../models/public-model';

@Injectable()
export class LocalStorageService {

  setInfo(info: Item) {
    this.setItem('info', info);
  }

  getInfo(): Item {
    return this.getItem('info');
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
