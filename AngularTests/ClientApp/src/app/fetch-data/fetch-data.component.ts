import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecastService } from '../core/weather-forecast.service';
import { WeatherForecast } from '../types/weather-forecast';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(
    private weatherForcastService: WeatherForecastService) {

    this.weatherForcastService.getAll()
      .subscribe(result => {
        this.forecasts = result;
      }, error => console.error(error));
  }
}

