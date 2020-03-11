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

  constructor(
    private weatherForcastService: WeatherForecastDataProviderService) { }

  public ngOnInit(): void {
    this.forecasts$ = this.weatherForcastService.getAll();
  }
}
