import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  public baseUrl: string = "/api";

  constructor(private httpClient: HttpClient) { }

  public get() {
    return this.httpClient.get<WeatherForecast[]>(this.baseUrl + 'weatherforecast');
  }

}
