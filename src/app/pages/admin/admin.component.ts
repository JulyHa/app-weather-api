import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';
import { ConfirmationService, MessageService, ConfirmEventType, MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  items: MenuItem[];

  constructor(private adminService: AdminService,
    private router: Router,
    private localStorage: LocalStorageService
  ) {

  }
  ngOnInit() {
    this.items = [
      {
        label: 'Con người',
        items: [
          {
            label: 'Người quản trị',
            icon: 'pi pi-user',
            url: '/manage/admin',
            target: '_self'
          }
        ]
      },
      {
        label: 'Thành phố',
        items: [
          {
            label: 'Thành phố',
            icon: 'pi pi-building',
            url: '/manage/city',
            target: '_self'
          }
        ]
      },
      
    ]

  }
  logout() {
    this.localStorage.deleteLocalStorage('adminLogin');
    this.router.navigate(['/']);

  }

}
