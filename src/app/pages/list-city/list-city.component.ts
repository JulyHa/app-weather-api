import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.scss']
})
export class ListCityComponent implements OnInit{
  citys : City[] = [
    {
      id: 1,
      name: 'Ha Noi',
      city: 'Hà Nội',
      country: 'Việt Nam'
    },
    {
      id: 2,
      name: 'Ho Chi Minh',
      city: 'Hồ Chí Minh',
      country: 'Việt Nam'
    },
    {
      id: 3,
      name: 'BaVi',
      city: 'Ba Vì',
      country: 'Việt Nam'
    }
  ]
  constructor(){}

  ngOnInit(): void {
      
  }
}
