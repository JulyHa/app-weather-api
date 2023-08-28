import { Component } from '@angular/core';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  user: Users;

  constructor(){
    this.user = new Users;
  }

  ngOnInit(): void {
      
  }

}
