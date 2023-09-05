import { Injectable, OnInit } from '@angular/core';
import { City } from '../model/city';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit{
  appid: string = '80c88043ab71c8936f490ee4cb1bc797';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  runUrl(url: string){
    return this.http.get(url);
  }

  getWeather(city: string) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.appid}&lang=vi` 
    return this.runUrl(url);
  }
  getLatAndLon(city: string){
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},&appid=${this.appid}&lang=vi`
    return this.runUrl(url);
  }
  getWeatherHourly(lat: number, lon: number){
    let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.appid}&lang=vi`
    return this.runUrl(url);
  }



}
