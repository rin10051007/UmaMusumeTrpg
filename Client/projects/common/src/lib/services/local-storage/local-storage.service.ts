import { Injectable } from '@angular/core';
import { LocalStorageItem } from '../../models/public-model';
import { ConveniencesService } from '../public-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  readonly key = 'info';
  constructor(private conveniencesService: ConveniencesService) { }


  setInfo(info: LocalStorageItem) {
    var tmpInfo = this.getInfo();
    if (this.conveniencesService.isEmpty(info?.token)) {
      info.token = tmpInfo?.token;
    }
    if (this.conveniencesService.isEmpty(info?.viewProject)) {
      info.viewProject = tmpInfo?.viewProject;
    }
    this.setItem(this.key, info);
  }

  getInfo(): LocalStorageItem {
    return this.getItem(this.key);
  }

  removeInfo() {
    return this.removeItem(this.key);
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
