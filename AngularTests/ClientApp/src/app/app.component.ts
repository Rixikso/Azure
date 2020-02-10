import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  public ngOnInit(): void {
    const urlName = environment.apiUrl;
    console.log(urlName);
  }
}
