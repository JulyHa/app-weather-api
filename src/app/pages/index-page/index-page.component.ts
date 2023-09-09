import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/model/city';
import { Weather } from 'src/app/model/weather';
import { CityService } from 'src/app/services/city.service';
import { WeatherService } from 'src/app/services/weather.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  currentWeather: any[] = [];
  citys: City[] = [];


  constructor(private weatherService: WeatherService, private route: ActivatedRoute, private cityService: CityService) {
  }
  ngOnInit(): void {
    this.citys = this.cityService.getAll();
    this.runApp();
  }
  async runApp() {
    await this.changeWeatherUI();

  }

  async changeWeatherUI() {
    for (let city of this.citys) {
      let data = await this.weatherService.getWeather(city.city).toPromise();
      this.currentWeather.push(data);
    }
  }
}
