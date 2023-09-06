import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-manage-city',
  templateUrl: './manage-city.component.html',
  styleUrls: ['./manage-city.component.scss']
})
export class ManageCityComponent implements OnInit {
  @Input() citys: City[]

  constructor() { }

  ngOnInit(): void {

  }

}
