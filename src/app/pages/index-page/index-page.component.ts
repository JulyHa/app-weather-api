import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
    currentWeather: any;
    local: any;
    weatherHourly: any;

    constructor(private weatherService : WeatherService){

    }
  ngOnInit(): void {
    this.runApp();
  }
  async runApp(){
    await this.changeWeatherUI();
    await this.getWeatherHourly();
  }

  async changeWeatherUI(){
    this.weatherService.getWeather('Ha noi').subscribe(data=>{
        this.currentWeather = data;
        
        console.log(this.currentWeather);
    });
  }
   async getWeatherHourly() {
    // let data = await this.weatherService.getLatAndLon('Ha noi').subscribe(data=>{
    //     this.local = data
    //     console.log(this.local);
    //     this.weatherService.getWeatherHourly(this.local[0].lat, this.local[0].lon).subscribe(data=>{
    //         this.weatherHourly = data;
    //         console.log(this.weatherHourly);
    //     })

    // })
    try{
    let data = await this.weatherService.getLatAndLon('Ha noi').toPromise();
    this.local = data;
    console.log(this.local);

    let weather = await this.weatherService.getWeatherHourly(this.local[0].lat, this.local[0].lon).toPromise();
    this.weatherHourly = weather;
    console.log(this.weatherHourly);
    }catch (err){
        console.log(err);
        
    }
  }


}
