import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  user: Users;

  constructor(){
    this.user = new Users;
  }

  ngOnInit(): void {
      
  }

}
