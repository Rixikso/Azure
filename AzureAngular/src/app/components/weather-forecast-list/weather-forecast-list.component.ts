import { Component, OnInit } from '@angular/core';
import { WeatherForecastDataProviderService } from 'src/app/core/weather-forecast-data-provider.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.scss']
})
export class WeatherForecastListComponent implements OnInit {
  public forecasts$: Observable<WeatherForecast[]>;
  public inEditMode = false;

  constructor(
    private weatherForcastService: WeatherForecastDataProviderService) { }

  public ngOnInit(): void {
    this.forecasts$ = this.weatherForcastService.getAll();
  }

  public addRandomForecast(): void {
    const weatherForecast: WeatherForecast = {
      date: '2020-03-13T12:16:24.6740018+01:00',
      temperatureC: 21,
      temperatureF: 42,
      summary: 'xd' };

    this.weatherForcastService.create(weatherForecast).subscribe();
  }

  public addForecast(): void {
    this.inEditMode = true;
  }

  public cancelAdd(): void {
    this.inEditMode = false;
  }
}
