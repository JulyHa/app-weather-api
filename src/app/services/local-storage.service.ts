import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getLocalStorage(key: string) : any{
    return JSON.parse(localStorage.getItem(key));
  }

  setLocalStorage(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  deleteLocalStorage(key: string){
    localStorage.removeItem(key);
  }

  deleteAll(){
    localStorage.clear();
  }
}
