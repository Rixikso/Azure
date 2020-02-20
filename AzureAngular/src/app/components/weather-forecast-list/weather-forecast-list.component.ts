import { Component, OnInit } from '@angular/core';
import { WeatherForecastDataProviderService } from 'src/app/core/weather-forecast-data-provider.service';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.scss']
})
export class WeatherForecastListComponent implements OnInit {

  public forecasts: WeatherForecast[];

  constructor(
    private weatherForcastService: WeatherForecastDataProviderService) { }

  public ngOnInit(): void {
    this.weatherForcastService.getAll()
    .subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}
