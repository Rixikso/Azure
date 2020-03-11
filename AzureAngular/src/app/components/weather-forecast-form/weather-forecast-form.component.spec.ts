import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastFormComponent } from './weather-forecast-form.component';

describe('WeatherForecastFormComponent', () => {
  let component: WeatherForecastFormComponent;
  let fixture: ComponentFixture<WeatherForecastFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForecastFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
