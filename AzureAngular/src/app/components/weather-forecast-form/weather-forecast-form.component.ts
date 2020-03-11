import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather-forecast-form',
  templateUrl: './weather-forecast-form.component.html',
  styleUrls: ['./weather-forecast-form.component.scss']
})
export class WeatherForecastFormComponent implements OnInit {

  constructor() { }

  public weatherForm: FormGroup = new FormGroup({
    date: new FormControl(''),
    temperatureC: new FormControl(0),
    temperatureF: new FormControl(0),
    summary: new FormControl(''),
  });

  ngOnInit(): void {
  }

  public logWeatherForecast() {
    console.log(this.weatherForm.value);
  }

}

