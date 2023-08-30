import { Injectable } from '@angular/core';
import { City } from '../model/city';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

const key: string = "80c88043ab71c8936f490ee4cb1bc797";

const cityData: City[] = [];
const stringData: string = 'https://api.weatherbit.io/v2.0/current'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get(
      `${stringData}?key=${key}`
    ).pipe((first()));
  }
}
