import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherForecastListComponent } from './components/weather-forecast-list/weather-forecast-list.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastListComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
