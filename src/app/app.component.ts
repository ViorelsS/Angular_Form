import { Component } from '@angular/core';

import { User } from './interfaces/user';
import { UserService } from './services/http/user.service';
import { UiService } from './services/ui/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userData: User[] = [];
  user!: User;
  title = 'FormTask';
  btnMessage = 'Registra';
  subscription!: Subscription;

  constructor(private userService: UserService) {}

  addUser(user: User) {
    this.userService
      .addUser(user)
      .subscribe((user) => this.userData.push(user));
  }

  toggleClick() {
    this.userService
      .getSpecificUser(101)
      .subscribe((user) => (this.user = user));
  }
}
