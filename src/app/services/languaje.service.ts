import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguajeService {

  constructor() { }

  getlanguaje() {
    const currentLanguaje = window.navigator.language;
    if (currentLanguaje.includes('es-')) {
      return true;
    } else {
      return false
    }
  }
}
