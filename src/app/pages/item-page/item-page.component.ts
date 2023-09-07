import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/model/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {
  lat: number;
  lon: number;
  local: any;
  hourly: Weather = new Weather;
  item : any[];
  city: string = 'Ha noi';



  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherHourly();
  }
  toggleSubMenu(index: number) {
    // this.hourly.show = !this.hourly.show;

  }
  async getWeatherHourly() {
    try {
      let data = await this.weatherService.getLatAndLon(this.city).toPromise();
      this.local = data;
      console.log(this.local);
      
      this.lat = this.local[0].lat;
      this.lon = this.local[0].lon;
      this.hourly.value = await this.weatherService.getWeatherHourly(this.lat, this.lon).toPromise();
      console.log(this.hourly);
      this.checkDate();
    } catch (err) {
      console.log(err);

    }
  }

  checkDate() {
    this.item = [];
    let day = new Date().getDate();
    for (let t of this.hourly.value.list) {
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
