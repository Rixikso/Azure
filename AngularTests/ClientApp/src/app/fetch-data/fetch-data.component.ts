import { Component } from '@angular/core';
import { WeatherForecastService } from '../core/weather-forecast.service';
import { WeatherForecast } from '../types/weather-forecast';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  public forecasts$: Observable<WeatherForecast[]>;

  constructor(
    private weatherForcastService: WeatherForecastService) {

  }

  public ngOnInit(): void {
    this.forecasts$ = this.weatherForcastService
      .getAll()
      .pipe(
        map(forecasts => {
          return forecasts;
        })
      );
  }
}

