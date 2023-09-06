import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.scss']
})
export class ManageAdminComponent implements OnInit {
  // admins: Admin[];
  showAdmin: Admin[];
  visible: boolean = false;
  infor: boolean = false;
  showItem: boolean = false;
  isEdit: boolean;
  nameEdit: string;
  account: Admin;
  value: string = '';

  constructor(private adminService: AdminService, private confirmationService: ConfirmationService, private messageService: MessageService) {
    // this.admins = this.adminService.getAll();
    this.showAdmin = this.adminService.getAll();
  }

  ngOnInit(): void {
    
    this.account = { username: '', password: '' }
  }
  showDialog() {
    this.visible = true;
    this.isEdit = false;
    this.nameEdit = 'Thêm người quản trị'
    this.account.username = '';
    this.account.password = '';
  }
  addAdmin() {
    let res = this.adminService.addAdmin({ username: this.account.username, password: this.account.password });
    if (res) {
      this.messageService.add({ severity: 'success', summary: 'Thành công', detail: 'Thêm thành công!' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Thất bại', detail: 'Người dùng đã tồn tại!' });
    }
    this.showAdmin = this.adminService.getAll();
    this.visible = false;
  }

  showInformation(id: number) {
    let u = this.adminService.findById(id);
    this.account = {
      id: u.id,
      username: u.username,
      password: u.password
    };
    this.infor = true;
  }

  showEdit(id: number) {
    this.visible = true;
    this.nameEdit = 'Chỉnh sửa người quản trị';
    this.isEdit = true;
    let u = this.adminService.findById(id);
    this.account = {
      id: u.id,
      username: u.username,
      password: u.password
    };
    
  }
  editAdmin() {
    let newAccount = {
      id: this.account.id,
      username: this.account.username,
      password: this.account.password
    };
    let res = this.adminService.editAdmin(this.account.id, newAccount);
    if (res) {
      this.messageService.add({ severity: 'success', summary: 'Thành công', detail: 'Sửa thành công!' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Thất bại', detail: 'Người dùng đã tồn tại!' });
    }
    this.showAdmin = this.adminService.getAll();
    this.visible = false;
  }

  showDelete(id: number) {
    let name = this.adminService.findById(id).username;
    this.confirmationService.confirm({
      message: 'Bạn có muốn xóa người quản trị tên '+ name+' này không?',
      // header: 'Xác nhận xóa',
      icon: 'pi pi-info-circle',
      accept: () => {
        if (this.adminService.deleteAdmin(id)) {
          this.messageService.add({ severity: 'success', summary: 'Thành công', detail: 'Bạn đã xóa thành công!' });
          this.showAdmin = this.adminService.getAll();
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Thất bại', detail: 'Xóa thất bại!' });
        }

      }
    }
    );
  }

  searchAdmin(){
    this.showAdmin = this.adminService.sreach(this.value);
  }
  reset(){
    this.showAdmin = this.adminService.getAll();
    this.value = ''
  }

}
