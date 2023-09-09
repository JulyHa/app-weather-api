import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.scss']
})
export class ListCityComponent implements OnInit{
  @Input() local : any
  @Input() currentWeather: any

  constructor(){}

  ngOnInit(): void {
    console.log(this.currentWeather);
    
  }
}
