import { Injectable } from '@angular/core';

function getWindow():any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowReferenceService {

  constructor() { }

  get nativeWindow() {
    return getWindow();
  }
}
