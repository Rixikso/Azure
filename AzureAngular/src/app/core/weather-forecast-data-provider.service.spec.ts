import { TestBed } from '@angular/core/testing';

import { WeatherForecastDataProviderService } from './weather-forecast-data-provider.service';

describe('WeatherForecastDataProviderService', () => {
  let service: WeatherForecastDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherForecastDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
