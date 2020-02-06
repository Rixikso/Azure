import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from '../types/weather-forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  public baseUrl = '/api';

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.baseUrl = baseUrl;
  }

  public getAll() {
    return this.httpClient.get<WeatherForecast[]>(this.baseUrl + 'weatherforecast');
  }

}
