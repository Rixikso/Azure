import { Component, OnInit } from '@angular/core';
import { mockedUsers } from 'src/app/mock-data/mock-users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public inputValue = '';
  public today: Date = new Date();
  public toggleBoy = false;
  public users: User[];

  constructor() { }

  ngOnInit() {
    this.users = mockedUsers.sort(this.compareName);
  }

  public compareName(firstElement: User, secondElement: User) {
    if (firstElement.lastName < secondElement.lastName ) { return -1; }
    if (firstElement.lastName > secondElement.lastName ) { return 1; }

    return 0;
  }

  public toggleWarning() {
    this.toggleBoy = !this.toggleBoy;
  }

  public onDelete(userToDelete: User) {
    this.users = this.users.filter( x => x.id !== userToDelete.id );
  }

  // Track by function allows you to recreate table only based on difference
  public trackByFunction(index, item) {
    // this is indentifier tracked by the ngFor for the optymalization
    return index;
  }

}
