import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() childUser: User;
  @Output() deleted = new EventEmitter<User>();

  public id: number = Math.random();

  constructor() { }

  ngOnInit() {
  }

  public delete(user: User) {
    this.deleted.emit(user);
  }
}
