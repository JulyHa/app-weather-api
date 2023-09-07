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
  local: any;
  weatherHourly: any = [];
  item: Weather[];
  citys: City[] = [];
  citySearch: string = 'Hà nội';
  lat: number;
  lon: number;


  constructor(private weatherService: WeatherService, private route: ActivatedRoute, private cityService: CityService) {
  }
  ngOnInit(): void {
    // nhận params từ đường dẫn localhost:4200/frist/child-a?id=1
    this.route.queryParams.subscribe(params => {
      // this.citySearch = params['city'];
    });
    this.citys = this.cityService.getAll();
    this.runApp();
  }
  async runApp() {
    await this.changeWeatherUI();
    await this.getWeatherHourly();

  }

  async changeWeatherUI() {
    for (let city of this.citys) {
      let data = await this.weatherService.getWeather(city.city).toPromise();
      this.currentWeather.push(data);
    }
  }
  async getWeatherHourly() {
    try {
      // let data = await this.weatherService.getLatAndLon(this.citySearch).toPromise();
      // this.local = data;
      for (let current of this.currentWeather) {
        this.lat = current.coord.lat;
        this.lon = current.coord.lon;
        let hourly = await this.weatherService.getWeatherHourly(this.lat, this.lon).toPromise();
        this.weatherHourly.push(hourly);
      
      }
      console.log(this.weatherHourly);
      
      this.checkDate();
    } catch (err) {
      console.log(err);

    }
  }

  checkDate() {
    this.item = [];
    let day = new Date().getDate();
    for (let t of this.weatherHourly[0].list) {
      let k: string = t.dt_txt;
      let nextDay = Number(k.slice(8, 10));
      if (day != nextDay) {
        this.item.push({
          value: t,
          check: true,
          show: false
        })
        day = nextDay;
      }
      else {
        this.item.push({
          value: t,
          check: false,
          show: false
        })
      }
    }
    this.item[0].check = true;
  }

}
