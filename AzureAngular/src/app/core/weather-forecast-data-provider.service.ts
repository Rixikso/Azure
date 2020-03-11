import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, publishReplay, refCount, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastDataProviderService {
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
        publishReplay(1),
        refCount(),
        catchError(error => {
          delete this.weatherForecasts;
          return EMPTY;
        })
      );

    return this.weatherForecasts;
  }

  public create(weatherForecast: WeatherForecast): Observable<any> {
    return this.httpClient.post<WeatherForecast>(this.baseUrl + 'weatherforecast', weatherForecast);
  }
}
