import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from 'src/app/model/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit, AfterViewInit {
  lat: number;
  lon: number;
  local: any;
  current: any;
  urlVideo: string = '../../../assets/mp4/Clear.mp4'
  hourly: Weather = new Weather;
  itemValue : any[];
  city: string = 'Ha noi';
  show: boolean=false;

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }
  ngAfterViewInit(){
    this.getWeatherCurrent();
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.city = params['city'];
    });
    this.ngAfterViewInit();
    // this.getWeatherCurrent();
    this.getWeatherHourly();
  }

  getWeatherCurrent(){
    this.weatherService.getWeather(this.city).subscribe(res => {
      this.show = false;
      this.current = res;    
      this.urlVideo = '../../../assets/mp4/' + this.current.weather[0].main + '.mp4';
      console.log(this.urlVideo);
      this.show = true;
    });
  }

  toggleSubMenu(index: number) {
    this.itemValue[index].show = !this.itemValue[index].show;

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
    this.itemValue = [];
    let day = new Date().getDate();
    for (let t of this.hourly.value.list) {
      let k: string = t.dt_txt;
      let nextDay = Number(k.slice(8, 10));
      if (day != nextDay) {
        this.itemValue.push({
          value: t,
          check: true,
          show: false
        })
        day = nextDay;
      }
      else {
        this.itemValue.push({
          value: t,
          check: false,
          show: false
        })
      }
    }
    this.itemValue[0].check = true;
    console.log(this.itemValue);
    
  }
}
