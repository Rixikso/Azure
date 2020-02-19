import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from '../types/weather-forecast';
import { Observable, EMPTY } from 'rxjs';
import { map, publishReplay, refCount, catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  public baseUrl = '/api';

  private weatherForecasts: Observable<WeatherForecast[]>;

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public getAll(): Observable<WeatherForecast[]> {
    if (this.weatherForecasts) { return this.weatherForecasts; }

    this.weatherForecasts = this.httpClient
      .get<WeatherForecast[]>(this.baseUrl + 'weatherforecast')
      .pipe(
        delay(1000),
        publishReplay(1),
        refCount(),
        catchError(error => {
          delete this.weatherForecasts;
          return EMPTY;
        })
      );

    return this.weatherForecasts;
  }
}
