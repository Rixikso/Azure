import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherForecastListComponent } from './components/weather-forecast-list/weather-forecast-list.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherForecastFormComponent } from './components/weather-forecast-form/weather-forecast-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastListComponent,
    WeatherForecastComponent,
    WeatherForecastFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
