import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private admins: Admin[];
  private adminLogin: Admin;

  constructor(private localStorage: LocalStorageService) {
    this.admins = localStorage.getLocalStorage('admin') || [{
      id: 1,
      username: 'admin',
      password: '123'
    },];
    
  }

  getAll(): Admin[] {
    this.adminLogin = this.localStorage.getLocalStorage('adminLogin');
    let accounts = []
    for (let acc of this.admins) {
      if (acc.id != this.adminLogin.id) {
        accounts.push(acc);
      }
    }
    return accounts;
  }

  checkActive(admin: Admin): Admin {
    for (let acc of this.admins) {
      if (acc.username == admin.username && acc.password == admin.password) {
        return acc;
      }
    }
    return null;
  }
  getId(): number {
    return this.admins[this.admins.length - 1].id + 1 || 1;
  }
  checkUsername(username: string): boolean {
    for (let acc of this.admins) {
      if (acc.username == username) {
        return true;
      }
    }
    return false;
  }

  addAdmin(admin: Admin): boolean {
    if (this.checkUsername(admin.username)) {
      return false;
    }
    admin.id = this.getId();
    this.admins.push(admin);
    this.localStorage.setLocalStorage('admin', this.admins);
    return true;
  }

  findById(id: number): Admin {
    return this.admins.find(admin => admin.id == id) || null;

  }
  findIndexById(id: number): number {
    return this.admins.findIndex(admin => admin.id == id);
  }

  editAdmin(id: number, newAdmin: Admin): boolean {
    console.log(newAdmin);

    if (this.checkUsername(newAdmin.username)) {
      return false;
    }
    let index = this.findIndexById(id);

    if (index < 0 || index > this.admins.length) {
      return false;
    }
    this.admins[index] = newAdmin;
    this.localStorage.setLocalStorage('admin', this.admins);
    return true;
  }

  deleteAdmin(id: number): boolean {
    let index = this.findIndexById(id);
    if (index < 0 || index > this.admins.length) {
      return false;
    }
    else {
      let adminLogin = this.localStorage.getLocalStorage('adminLogin');
      if (id == adminLogin.id) {
        return false;
      }
    }
    this.admins.splice(index, 1);
    this.localStorage.setLocalStorage('admin', this.admins);
    return true;
  }

  sreach(value: string): Admin[] {
    let list = [];
    for (let acc of this.admins) {
      if (acc.username.includes(value)) {
        list.push(acc);
      }
    }
    return list;
  }
}
