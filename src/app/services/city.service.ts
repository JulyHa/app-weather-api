import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { City } from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citys: City[];
  constructor(private local: LocalStorageService) {
    this.citys = local.getLocalStorage('citys') || [];
  }

  getAll(): City[] {
    return this.citys;
  }
  getId(){    
    return this.citys.length > 0? this.citys[this.citys.length - 1].id + 1 : 1;
  }

  findById(id: number): City {
    return this.citys.find(admin => admin.id == id) || null;
  }

  findIndexById(id: number): number {
    return this.citys.findIndex(admin => admin.id == id);
  }

  exitsCity(id: number, city: string): boolean {
    for(let c of this.citys){
      if(c.id != id && c.city == city){
        return true;
      }
    }
    return false;
  }

  add(newCity: City): boolean {
    newCity.id = this.getId();
    if (this.exitsCity(newCity.id, newCity.city)) {
      return false;
    }
    
    this.citys.push(newCity);
    this.local.setLocalStorage('citys', this.citys);
    return true;

  }

  edit(id: number, editCity: City) {    
    if (this.exitsCity(id, editCity.city)) {
      return false;
    }
    let index = this.findIndexById(id);

    if (index < 0 || index > this.citys.length) {
      return false;
    }
    this.citys[index] = editCity;
    this.local.setLocalStorage('citys', this.citys);
    return true;
  }

  remove(id: number) {
    let index = this.findIndexById(id);
    if (index < 0 || index > this.citys.length) {
      return false;
    }
    this.citys.splice(index, 1);
    this.local.setLocalStorage('citys', this.citys);
    return true;
  }
  sreach(value: string): City[]{
    let list = [];
    for(let c of this.citys){
      if(c.city.includes(value)){
        list.push(c);
      }
    }
    return list;
  }

}
