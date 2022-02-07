import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguajeService {

  public currentLanguaje: string = '';
  private sendLanguaje = new Subject<boolean>();
  languajeObservable = this.sendLanguaje.asObservable();
  public lang = false;

  constructor() {
    this.getlanguaje();
  }

  getlanguaje() {
    this.currentLanguaje = window.navigator.language;
    if (this.currentLanguaje.includes('es-')) {
      this.lang = true;
    } else {
      this.lang = false;
    }
  }

  setlanguaje() {
    this.lang = !this.lang
    this.sendLanguaje.next(this.lang);
  }

}
