import { Injectable, } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class HelperService {
  constructor() {}

  private loadingPropertyChanged = new Subject<boolean>();
  loadingPropertyChanged$: Observable<any> = this.loadingPropertyChanged.asObservable();

  showLoader(value) {
    this.loadingPropertyChanged.next(value);
  }

  setStorage(name, value) {
    localStorage.setItem(name, value);
  }

  getStorage(keyName) {
    let storage: any = localStorage.getItem(keyName);
    storage = storage ? JSON.parse(storage) : {};
    return storage;
  }

  deleteStorage(key) {
    return localStorage.removeItem(key);
  }

  clearStorage() {
    return localStorage.clear();
  }
}
