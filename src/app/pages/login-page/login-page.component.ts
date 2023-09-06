import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [MessageService]
})
export class LoginPageComponent {
  user: Admin;
  username: string;
  password: string;

  constructor(private adminService: AdminService, private router: Router,
    private messageService: MessageService,
    private localStoge: LocalStorageService) {
  }

  ngOnInit(): void {

  }

  login(){
      let res = this.adminService.checkActive({username: this.username, password: this.password});
      if(res){
        this.localStoge.setLocalStorage('adminLogin', res);
        this.router.navigate(['/manage/admin']);
      }
      else{
        this.messageService.add({ severity: 'error', summary: 'Thất bại', detail: 'Tài khoản hoặc mật khẩu không đúng' });
      }
  }

}
