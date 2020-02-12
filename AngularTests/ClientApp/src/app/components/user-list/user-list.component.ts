import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public inputValue = '';
  public today: Date = new Date();
  public toggleBoy = false;
  public customers = [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

  public toggleWarning() {
    this.toggleBoy = !this.toggleBoy;
  }

  // Track by function allows you to recreate table only based on difference
  public trackByFunction(index, item) {
    // this is indentifier tracked by the ngFor for the optymalization
    return index;
  }

}
