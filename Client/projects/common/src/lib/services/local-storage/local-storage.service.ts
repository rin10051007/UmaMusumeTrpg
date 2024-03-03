import {Injectable} from '@angular/core';
import {LocalStorageToken, LocalStorageViewProject} from '../../models/public-model';
import {ConveniencesService} from '../public-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  readonly tokenKey = 'token';
  readonly ViewProjectKey = 'viewProject';

  constructor(private conveniencesService: ConveniencesService) {
  }


  setToken(token: LocalStorageToken) {
    this.setItem(this.tokenKey, token);
  }

  getToken(): string {
    return (this.getItem(this.tokenKey) as LocalStorageToken)?.token || '';
  }

  removeToken() {
    return this.removeItem(this.tokenKey);
  }

  setViewProject(viewProject: LocalStorageViewProject) {
    this.setItem(this.ViewProjectKey, viewProject);
  }

  getViewProject(): string {
    return (this.getItem(this.ViewProjectKey) as LocalStorageViewProject)?.viewProject || '';
  }

  removeViewProject() {
    return this.removeItem(this.ViewProjectKey);
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
