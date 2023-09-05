import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';
// const admin: Admin[] = [
//   {
//     id: 1,
//     username: 'admin',
//     password: '123'
//   },
//   {
//     id: 2,
//     username: 'ngyenngu',
//     password: '123'
//   },
//   {
//     id: 3,
//     username: 'ran-mori',
//     password: '123'
//   }
// ]
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
    private messageService: MessageService) {
  }

  ngOnInit(): void {

  }

  login(){
      let res = this.adminService.checkActive({username: this.username, password: this.password});
      
      if(res){
        this.router.navigate(['/admin']);
      }
      else{
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
      }
  }

}
