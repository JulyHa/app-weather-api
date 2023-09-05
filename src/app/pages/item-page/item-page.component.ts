import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit{
  @Input() current : any
  @Input() hourly : any
  constructor(){}

  ngOnInit(): void {
      
  }
}
