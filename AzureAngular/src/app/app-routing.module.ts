import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherForecastListComponent } from './components/weather-forecast-list/weather-forecast-list.component';


const routes: Routes = [
  { path: '', component: WeatherForecastListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
