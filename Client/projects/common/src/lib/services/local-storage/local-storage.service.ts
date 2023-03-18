import { Injectable } from '@angular/core';
import { LocalStorageItem } from '../../models/public-model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setInfo(info: LocalStorageItem) {
    this.setItem('info', info);
  }

  getInfo(): LocalStorageItem {
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
