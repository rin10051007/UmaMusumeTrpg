import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConveniencesService {

  constructor() { }

  isEmpty(value: string | null | undefined): boolean {
    return value === null || value === undefined || value === '';
  }
}
