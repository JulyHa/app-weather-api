import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  ngOnInit() {
  }
  
  toggleSubMenu(item: HTMLElement) {
    var subMenu = item.querySelector('.sub-menu');
    if (subMenu) {
      subMenu.classList.toggle('show');
    } else {
      subMenu.classList.toggle('hidden');
    }
  }
}
