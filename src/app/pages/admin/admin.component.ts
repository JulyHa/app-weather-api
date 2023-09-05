import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  admins: Admin[]
  visible: boolean = false;
  infor : boolean = false;

  username: string;
  password: string;


  constructor(private adminService: AdminService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private router : Router
  ) {

  }
  ngOnInit() {
    this.admins = this.adminService.getListAdmins();
  }
  showDialog() {
    this.visible = true;
    this.username = '';
    this.password = '';
  }
  showEdit(id: number){
    let u = this.adminService.findById(id);
    this.username = u.username;
    this.password = u.password;
    this.infor = true;
  }
  addAdmin(){
    this.adminService.addAdmin({username: this.username, password: this.password});
    this.visible = false;
    this.messageService.add({ severity: 'success', summary: 'Thành công', detail: 'Thêm thành công!' });
  }
  deleteAdmin(id: number) {
    console.log(id);
    // alert('Bạn có muốn xóa không?')
  }

  confirm2() {
    console.log("hihi");
    
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        }
    });
}

  logout(){
    localStorage.removeItem('adminLogin');
    this.router.navigate(['/']);
    
  }

}
