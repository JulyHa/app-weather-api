import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import { LocalStorageService } from './local-storage.service';
import { getLocaleMonthNames } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private admins: Admin[];
  constructor(private localStorage : LocalStorageService) {
    this.admins = localStorage.getLocalStorage('admin') || [{
      id: 1,
      username: 'admin',
      password: '123'
    },];
  }

  getListAdmins(): Admin[]{ return this.admins;}

  checkActive(admin: Admin): boolean {
    for (let acc of this.admins) {
      if (acc.username == admin.username && acc.password == admin.password) {
        return true;
      }
    }
    return false;
  }
  getId(): number{
    return this.admins[this.admins.length-1].id+1 || 1;
  }

  addAdmin(admin: Admin): boolean {
    if(this.checkActive(admin)){
      return false;
    }
    admin.id = this.getId();
    this.admins.push(admin);  
    this.localStorage.setLocalStorage('admin', this.admins);
    return true;
  }

  findById(id:number): Admin{
    return this.admins.find(admin => admin.id == id) || null;
    
  }
  findIndexById(id: number): number{
    return this.admins.findIndex(admin => admin.id == id) || -1;
  }

  editAdmin(id: number, newAdmin: Admin): boolean{
    let index = this.findIndexById(id);
    if(index < 0 || index > this.admins.length){
      return false;
    }
    this.admins[index] = newAdmin;
    this.localStorage.setLocalStorage('admin', this.admins);
    return true;
  }

  deleteAdmin(id: number): boolean{
    let index = this.findIndexById(id);
    if(index < 0 || index > this.admins.length){
      return false;
    }
    this.admins.splice(index, 1);
    this.localStorage.setLocalStorage('admin', this.admins);
    console.log(this.admins);
    
    return true;
  }


}
