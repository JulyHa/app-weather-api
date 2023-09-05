import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from 'src/app/model/weather';
import { WeatherService } from 'src/app/services/weather.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  currentWeather: any;
  local: any;
  weatherHourly: any;
  item: Weather[] = [];
  citySearch: string = '';
  lat: number;
  lon: number;


  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    // nhận params từ đường dẫn localhost:4200/frist/child-a?id=1
    this.route.queryParams.subscribe(params => {
      this.citySearch = params['city'];
    });
    this.runApp();
  }
  async runApp() {
    await this.changeWeatherUI();
    await this.getWeatherHourly();

  }

  async changeWeatherUI() {
    this.weatherService.getWeather(this.citySearch).subscribe(data => {
      this.currentWeather = data;
    });
  }
  async getWeatherHourly() {
    try {
      let data = await this.weatherService.getLatAndLon(this.citySearch).toPromise();
      this.local = data;
      this.lat = this.local[0].lat;
      this.lon = this.local[0].lon;

      this.weatherHourly = await this.weatherService.getWeatherHourly(this.lat, this.lon).toPromise();
      this.checkDate();
    } catch (err) {
      console.log(err);

    }
  }

  checkDate() {
    this.item = [];
    let day = new Date().getDate();

    for (let t of this.weatherHourly.list) {
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
