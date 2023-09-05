import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/model/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  user: Admin;

  constructor(){
    this.user = new Admin;
  }

  ngOnInit(): void {
      
  }

}
