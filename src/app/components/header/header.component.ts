import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  acc ?: Admin;
  @Input() value ?: boolean = true; 
  constructor(private local: LocalStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.checkAccount();
    console.log(this.value);
  }

  checkAccount() {
    this.acc = this.local.getLocalStorage('adminLogin') || null;
  }

  logout() {
    this.local.deleteLocalStorage('adminLogin');
    this.acc = null;
    this.router.navigate(['/']);
  }

}
